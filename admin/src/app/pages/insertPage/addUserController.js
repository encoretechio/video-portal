angular.module('insert')
  .controller('addUserController', ['insertService','$scope', addUserCtrl]);

/** @ngInject */
function addUserCtrl(insertService,$scope) {


    $scope.initialize = function(){
      console.log("initialize addUserController")
      $scope.formData = {};
    }

    $scope.initialize();

    $scope.submit = function(){
        insertService.addUser($scope.formData);
        console.log($scope.formData);
    }
}
