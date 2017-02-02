(function() {
    'use strict';

    angular.module('BlurAdmin.pages.user', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('main.user', {
                url: '/user/:userID',
                templateUrl: 'app/pages/userProfile/user.html',
                controller: 'userController',
                title: 'User Profile',
                sidebarMeta: {
                  icon: 'ion-person',
                  order: 0,
                }
            });
    }
})();
