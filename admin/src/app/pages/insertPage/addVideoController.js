/**
 * Created by Ravindu Hasantha on 09-Nov-16.
 */
var app = angular.module('BlurAdmin.pages.insert')
    .controller('addVideoController', ['insertService','$scope', addVideoCtrl]);

/** @ngInject */
function addVideoCtrl(insertService,$scope) {

    $scope.initialize = function(){
        console.log("initialize addVideoController")
        $scope.formData = {};
    };

    $scope.initialize();

    AWS.config.update({
        accessKeyId: "AKIAI3EZYDVBHIAARKBQ",
        secretAccessKey: "HrFACNgvTYQabH1IJ4QKhvSFN02pykOs/zfBXnQj",
        region: "ap-south-1"  // <- If you want send something to your bucket, you need take off this settings, because the S3 are global.
    });

    var bucket = new AWS.S3({params: {Bucket: 'letsbuild-videos'}});


    $scope.submit = function(){
        if($scope.formData.title) {
            insertService.addVideo($scope.formData);
            console.log($scope.formData);
            insertService.alertMsg = "You successfully added a Video";
            insertService.showAlert();
        }
        //var file = uploadFile.files[0];
        if ($scope.file) {
            var file = $scope.file;
            var params = {Key: file.name, ContentType: file.type, Body: file};
            bucket.upload(params, function (err, data) {
                if(err){
                    console.log('error');
                } else{
                    console.log('Uploaded');
                }
            });
        } else {
            console.log('Nothing to upload.');
        }
    };

    $scope.uploadVideo = function () {
        var fileInput = document.getElementById('uploadFile');
        fileInput.click();
        console.log(fileInput.value);
    };

    $scope.getFile = function() {
        //var fileReader = new FileReader();
        $scope.file  = document.querySelector('input[type=file]').files[0];
        console.log($scope.file.value);
    };

    insertService.getPlaylists().then(function(data) {
        $scope.allPlaylists =  data;
    });
}
