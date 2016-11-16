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

    $scope.tablePageSize = 10;
    $scope.allUsers = [
        {
            "Id": "1",
            "username": "pissunadun",
            "firstName": "Pissu",
            "lastName": "Nadun",
            "email": "pissu@nadun.tk",
            "age": "23",
            "imageSrc": "assets/img/app/profile/Nasta.png"
        },
        {
            "Id": "2",
            "username": "pissujohn1",
            "firstName": "Pissu",
            "lastName": "Johnny",
            "email": "john@nadun.tk",
            "age": "29",
            "imageSrc": "assets/img/app/profile/Nasta.png"
        },
        {
            "Id": "3",
            "username": "pissujohn2",
            "firstName": "Pissu",
            "lastName": "John",
            "email": "john@nadun.tk",
            "age": "29",
            "imageSrc": "assets/img/app/profile/Nasta.png"
        },
        {
            "Id": "4",
            "username": "pissujohn3",
            "firstName": "Pissu",
            "lastName": "John",
            "email": "john@nadun.tk",
            "age": "29",
            "imageSrc": "assets/img/app/profile/Nasta.png"
        },
        {
            "Id": "5",
            "username": "pissujohn4",
            "firstName": "Pissu",
            "lastName": "John",
            "email": "john@nadun.tk",
            "age": "29",
            "imageSrc": "assets/img/app/profile/Nasta.png"
        },
        {
            "Id": "6",
            "username": "pissujohn5",
            "firstName": "Pissu",
            "lastName": "John",
            "email": "john@nadun.tk",
            "age": "29",
            "imageSrc": "assets/img/app/profile/Nasta.png"
        },
        {
            "Id": "7",
            "username": "pissujohn6",
            "firstName": "Pissu",
            "lastName": "John",
            "email": "john@nadun.tk",
            "age": "29",
            "imageSrc": "assets/img/app/profile/Nasta.png"
        },
        {
            "Id": "8",
            "username": "pissujohn6",
            "firstName": "Pissu",
            "lastName": "John",
            "email": "john@nadun.tk",
            "age": "29",
            "imageSrc": "assets/img/app/profile/Nasta.png"
        },
        {
            "Id": "9",
            "username": "pissujohn6",
            "firstName": "Pissu",
            "lastName": "John",
            "email": "john@nadun.tk",
            "age": "29",
            "imageSrc": "assets/img/app/profile/Nasta.png"
        },
        {
            "Id": "10",
            "username": "pissujohn6",
            "firstName": "Pissu",
            "lastName": "John",
            "email": "john@nadun.tk",
            "age": "29",
            "imageSrc": "assets/img/app/profile/Nasta.png"
        }
    ];
}
