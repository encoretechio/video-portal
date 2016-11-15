(function () {
  'use strict';

  angular.module('user', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('user', {
          url: '/user/:userID',
          templateUrl: 'app/pages/userProfile/user.html',
          controller: 'userController',
        });
  }
})();
