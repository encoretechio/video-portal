/**
 * Created by Ravindu Hasantha on 09-Nov-16.
 */
var app = angular.module('insert')
    .controller('addVideoController', ['insertService','$scope', addVideoCtrl]);

/** @ngInject */
function addVideoCtrl(insertService,$scope) {

    $scope.initialize = function(){
        console.log("initialize addVideoController")
        $scope.formData = {};
    };

    $scope.initialize();

    $scope.submit = function(){
        if($scope.formData.title) {
            insertService.addVideo($scope.formData);
            console.log($scope.formData);
            insertService.alertMsg = "You successfully added a Video";
            insertService.showAlert();
        }
    };

    $scope.uploadVideo = function () {
        var fileInput = document.getElementById('uploadFile');
        fileInput.click();
        console.log(fileInput.value);

    };

    $scope.getFile = function() {
        var fileReader = new FileReader();
        $scope.file  = document.querySelector('input[type=file]').files[0];
        fileReader.readAsDataURL($scope.file, $scope)
            .then(function(result) {
                $scope.images.push(result);
            });
    };

    insertService.getPlaylists().then(function(data) {
        $scope.allPlaylists =  data;
    });
}
