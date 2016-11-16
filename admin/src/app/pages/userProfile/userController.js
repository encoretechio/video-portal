angular.module('user')
  .controller('userController', userCtrl);

/** @ngInject */
function userCtrl($scope, $state,$stateParams) {

    $scope.userID = $stateParams.userID;
}
