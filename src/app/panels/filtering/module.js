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
      _.each(filterSrv.list, function(filter) {
        if (filter === updatedFilter) {
          return;
        }
        if (filter.query.indexOf(updatedFilter.name) !== -1) {
          $scope.applyFilter(filter);
        }
      });
    };

    $scope.applyFilter = function(filter) {
      var query = filterSrv.applyFilterToTarget(filter.query);

      datasourceSrv.default.metricFindQuery(query)
        .then(function (results) {
          filter.editing=undefined;
          //S4HC AJ: Excluded leafs from filter list
          filter.options = _.filter(results,function(node) {
              return node.expandable;
            })
              .map(function(node) {
              return { text: node.text, value: node.text };
            });

          if (filter.includeAll) {
            var allExpr = '{';
            _.each(filter.options, function(option) {
              allExpr += option.text + ',';
            });
            allExpr = allExpr.substring(0, allExpr.length - 1) + '}';
            filter.options.unshift({text: 'All', value: allExpr});
          }

          filterSrv.filterOptionSelected(filter, filter.options[0]);
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

  });
});