(function () {
  'use strict';

  angular.module('insert', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('insert', {
          url: '/insert',
          templateUrl: 'app/pages/insertPage/main.html',
          controller: 'mainController',
        })
        .state('insert.addUser', {
          url: '/user',
          parent : 'insert',
          templateUrl: 'app/pages/insertPage/addUser.html',
          controller: 'addUserController',
        });
  }
})();
