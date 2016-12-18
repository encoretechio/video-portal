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
        }
    };

    $scope.uploadVideo = function () {
        var fileInput = document.getElementById('uploadFile');
        fileInput.click();
        console.log(fileInput.value);

    };

    insertService.getPlaylists().then(function(data) {
        $scope.allPlaylists =  data;
    });
}
