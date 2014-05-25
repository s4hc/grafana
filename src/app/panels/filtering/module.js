/*

  ## filtering

*/
define([
  'angular',
  'app',
  'underscore'
],
function (angular, app, _) {
  'use strict';

  var module = angular.module('kibana.panels.filtering', []);
  app.useModule(module);

  module.controller('filtering', function($scope, filterSrv, datasourceSrv, $rootScope, dashboard) {

    $scope.panelMeta = {
      status  : "Stable",
      description : "graphite target filters"
    };

    // Set and populate defaults
    var _d = {
    };
    _.defaults($scope.panel,_d);

    $scope.init = function () {
      $scope.filterSrv = filterSrv;
      //S4HC AJ: If filter options are empty apply filters
      _.each(filterSrv.list, function (filter) {
        if (filter.options.length === 0) {
          $scope.applyFilter(filter);
        }
      });
    };

    $scope.remove = function(filter) {
      filterSrv.remove(filter);
    };

    $scope.filterOptionSelected = function(filter, option) {
      filterSrv.filterOptionSelected(filter, option);
      $scope.applyFilterToOtherFilters(filter);
    };

    $scope.applyFilterToOtherFilters = function(updatedFilter) {
      console.log('apply for:'+updatedFilter.name+' - '+updatedFilter.query);
      _.each(filterSrv.list, function(filter) {
        if (filter === updatedFilter) {
          console.log('\tapply: same');
          return;
        }
        if (filter.query.indexOf(updatedFilter.name) !== -1) {
          console.log('\tapply: filter '+ filter.name + ' contains ' + updatedFilter.name);
          $scope.applyFilter(filter);
        }
      });
    };

    $scope.applyFilter = function(filter) {
      var query = filterSrv.applyFilterToTarget(filter.query);

      datasourceSrv.default.metricFindQuery(query)
        .then(function (results) {
          console.log('\t\toptions start: filter '+ filter.name + ' > '+_.pluck(filter.options,'text').join(","));
          filter.editing=undefined;
          //S4HC AJ: Excluded leafs from filter list
          filter.options = _.filter(results,function(node) {
              return node.expandable;
            })
              .map(function(node) {
              return { text: node.text, value: node.text };
            });
          console.log('\t\toptions aj:filter '+ filter.name + ' > '+_.pluck(filter.options,'text').join(","));
          if (filter.includeAll) {
            // S4HC AJ: Rollback of previous 1.5.3 behaviour
            if(endsWithWildcard(filter.query)) {
              filter.options.unshift({text: 'All', value: '*'});
            }
            else {
              var allExpr = '{';
              _.each(filter.options, function(option) {
                allExpr += option.text + ',';
              });
              allExpr = allExpr.substring(0, allExpr.length - 1) + '}';
              filter.options.unshift({text: 'All', value: allExpr});
            }
          }
          console.log('\t\toptions end:filter '+ filter.name + ' > '+_.pluck(filter.options,'text').join(","));

          // S4HC AJ: Keep selected filter if exist in filter
          // TODO: Test what is happening when current filter doesn't exsist anymore
          var currentFilter = _.omit(filter.current, "$$hashKey");
          var selectedFilter;
          if (currentFilter.value==='*') {
            selectedFilter =  filter.options[0];
          } else {
            selectedFilter =_.findWhere(filter.options, currentFilter) || filter.options[0]
          }
          filterSrv.filterOptionSelected(filter, selectedFilter);
        });
    };

    $scope.add = function() {
      filterSrv.add({
        type      : 'filter',
        name      : 'filter name',
        editing   : true,
        query     : 'metric.path.query.*',
        //S4HC AJ: Include all turned on by default
        includeAll: true
      });
    };

    $scope.refresh = function() {
      dashboard.refresh();
    };

    $scope.render = function() {
      $rootScope.$broadcast('render');
    };
    // S4HC AJ: Rollback of previous 1.5.3 behaviour
    function endsWithWildcard(query) {
      if (query.length === 0) {
        return false;
      }

      return query[query.length - 1] === '*';
    }

  });
});