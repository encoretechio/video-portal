(function () {
  'use strict';

  angular.module('BlurAdmin.pages.insert', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('main.insert', {
          url: '/insert',
          templateUrl: 'app/pages/insertPage/main.html',
          controller: 'mainController',
          title: 'Insert',
          sidebarMeta: {
            icon: 'ion-plus-round',
            order: 0,
          }
        })
        .state('main.insert.addUser', {
          url: '/user',
          templateUrl: 'app/pages/insertPage/addUser.html',
          controller: 'addUserController'
        })
        .state('main.insert.addRole', {
          url: '/role',
          templateUrl: 'app/pages/insertPage/addRole.html',
          controller: 'addRoleController'
        })
        .state('main.insert.addPlaylist', {
            url: '/playlist',
            templateUrl: 'app/pages/insertPage/addPlaylist.html',
            controller: 'addPlaylistController'
        })
        .state('main.insert.addVideo', {
          url: '/video',
          templateUrl: 'app/pages/insertPage/addVideo.html',
          controller: 'addVideoController'
      });
  }
})();
