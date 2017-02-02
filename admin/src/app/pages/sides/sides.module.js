(function() {
    'use strict';

    angular.module('BlurAdmin.pages.sides', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/pages/sides/sides.html',
                redirectTo: 'main.home'
            });
    }

})();
