/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('recentSearch', recentSearch);

  /** @ngInject */
  function recentSearch() {
    return {
      restrict: 'E',
      controller: 'recentSearchCtrl',
      templateUrl: 'app/pages/dashboard/recentSearch/recentSearch.html'
    };
  }
})();