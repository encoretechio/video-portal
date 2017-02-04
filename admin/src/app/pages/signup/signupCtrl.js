(function() {
    'use strict';

    angular.module('BlurAdmin.pages.signup')
        .controller('SignupCtrl', SignupCtrl);

    /** @ngInject */
    function SignupCtrl($scope, $http, toastr, AuthenticationService, $state) {
        $scope.signUp = function() {
          
        };
    }

})();
