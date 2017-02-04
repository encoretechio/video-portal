angular.module('BlurAdmin.pages.insert')
  .controller('addUserController', ['insertService','$scope', addUserCtrl]);

/** @ngInject */
function addUserCtrl(insertService,$scope,$mdDialog) {

    $scope.initialize = function(){
      console.log("initialize addUserController")
      $scope.formData = {};
    };

    $scope.initialize();

    $scope.submit = function(){
        insertService.addUser($scope.formData);
        console.log($scope.formData);
        insertService.alertMsg = "You successfully added a user";
        insertService.showAlert();
    };

    insertService.getRoles().then(function(data) {
        $scope.allRoles =  data;
    });

}
