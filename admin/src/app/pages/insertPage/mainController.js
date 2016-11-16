angular.module('insert')
  .controller('mainController', mainCtrl);

/** @ngInject */
function mainCtrl($scope, $state) {

    $scope.addUser = function(){
      $state.go('insert.addUser');
    };
     $scope.addRole = function(){
      $state.go('insert.addRole');
    };
}
