angular.module('insert')
  .controller('mainController', mainCtrl);

/** @ngInject */
function mainCtrl($scope, $state) {

    $scope.addUser = function(){
      $state.go('insert.addUser');
    };
}
