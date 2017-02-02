(function() {
    'use strict';

    angular.module('BlurAdmin.pages.login')
        .controller('LoginCtrl', LoginCtrl);

    /** @ngInject */
    function LoginCtrl($scope, $http, toastr, AuthenticationService, $state) {

        $scope.signIn = function() {
            
        };
    }

})();
