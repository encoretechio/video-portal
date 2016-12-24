(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('lineChart', lineChart);

  /** @ngInject */
  function lineChart() {
    return {
      restrict: 'E',
      controller: 'lineChartCtrl',
      templateUrl: 'app/pages/dashboard/lineChart/lineChart.html'
    };
  }
})();