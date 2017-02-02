(function() {
    'use strict';

    angular.module('BlurAdmin.pages.signup', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('signup', {
                url: '/signup',
                title: 'signup',
                templateUrl: 'app/pages/signup/signup.html',
                controller: 'SignupCtrl',
            });
    }

})();
