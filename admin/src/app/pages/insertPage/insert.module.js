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
        })
        .state('insert.addRole', {
          url: '/role',
          parent : 'insert',
          templateUrl: 'app/pages/insertPage/addRole.html',
          controller: 'addRoleController',
        })
        .state('insert.addPlaylist', {
            url: '/playlist',
            parent : 'insert',
            templateUrl: 'app/pages/insertPage/addPlaylist.html',
            controller: 'addPlaylistController',
        })
        .state('insert.addVideo', {
          url: '/video',
          parent : 'insert',
          templateUrl: 'app/pages/insertPage/addVideo.html',
          controller: 'addVideoController',
      });
  }
})();
