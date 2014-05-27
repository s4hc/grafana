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

  module.controller('filtering', function($scope, datasourceSrv, $rootScope, $timeout, $q) {

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

    $scope.remove = function(templateParameter) {
      $scope.filter.removeTemplateParameter(templateParameter);
    };

    $scope.filterOptionSelected = function(templateParameter, option, recursive) {
      templateParameter.current = option;

      $scope.filter.updateTemplateData();

      return $scope.applyFilterToOtherFilters(templateParameter)
        .then(function() {
          // only refresh in the outermost call
          if (!recursive) {
            $scope.dashboard.refresh();
          }
        });
    };

    $scope.applyFilterToOtherFilters = function(updatedTemplatedParam) {
      var promises = _.map($scope.filter.templateParameters, function(templateParam) {
        if (templateParam === updatedTemplatedParam) {
          return;
        }
        if (templateParam.query.indexOf(updatedTemplatedParam.name) !== -1) {
          return $scope.applyFilter(templateParam);
        }
      });

      return $q.all(promises);
    };

    $scope.applyFilter = function(templateParam) {
      return datasourceSrv.default.metricFindQuery($scope.filter, templateParam.query)
        .then(function (results) {
          templateParam.editing = undefined;
          templateParam.options = _.map(results, function(node) {
            return { text: node.text, value: node.text };
          });

          if (templateParam.includeAll) {
            // S4HC AJ: Rollback of previous 1.5.3 behaviour
            if(endsWithWildcard(filter.query)) {
              filter.options.unshift({text: 'All', value: '*'});
            templateParam.options.unshift({text: 'All', value: allExpr});
          }
            else {
              var allExpr = '{';
              _.each(filter.options, function(option) {
                allExpr += option.text + ',';
              });
              allExpr = allExpr.substring(0, allExpr.length - 1) + '}';
              filter.options.unshift({text: 'All', value: allExpr});
            }

          // if parameter has current value
          // if it exists in options array keep value
          if (templateParam.current) {
            var currentExists = _.findWhere(templateParam.options, { value: templateParam.current.value });
            if (currentExists) {
              return $scope.filterOptionSelected(templateParam, templateParam.current, true);
            }
          }

          return $scope.filterOptionSelected(templateParam, templateParam.options[0], true);
        });
    };

    $scope.add = function() {
      $scope.filter.addTemplateParameter({
        type      : 'filter',
        name      : 'filter name',
        editing   : true,
        query     : 'metric.path.query.*',
        //S4HC AJ: Include all turned on by default
        includeAll: true
      });
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
