angular.module('insert')
  .controller('addRoleController', ['insertService','$scope', addRoleCtrl]);

/** @ngInject */
function addRoleCtrl(insertService,$scope) {


    $scope.initialize = function(){
      console.log("initialize addRoleController")
      $scope.formData = {};
    };

    $scope.initialize();

    $scope.submit = function(){
        insertService.addRole($scope.formData);
        console.log($scope.formData);
    };

    $scope.userChanged = function (value) {
        var userName = value ? value.name : "none";
        $scope.message = "ac-change event fired for user. New user: " + username;
        $scope.$digest();
    };
}
