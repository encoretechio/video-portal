angular.module('insert')
  .controller('addRoleController', ['insertService','$scope', addRoleCtrl]);

/** @ngInject */
function addRoleCtrl(insertService,$scope) {

    $scope.initialize = function(){
      console.log("initialize addRoleController");
      $scope.formData = {};
    };

    $scope.initialize();

    $scope.viewable_playlists =[];
    $scope.backendPlaylists = [];

    insertService.getPlaylists().then(function(data) {
        $scope.allPlaylists =  data;
        $scope.addPlaylistNode($scope.allPlaylists);
    });

    $scope.submit = function(){
        $scope.formData.viewable_playlists = $scope.viewable_playlists;
        insertService.addRole($scope.formData);
        console.log($scope.formData);

    };

    $scope.userChanged = function (value) {
        var userName = value ? value.name : "none";
        $scope.message = "ac-change event fired for user. New user: " + username;
        $scope.$digest();
    };

    $scope.addPlaylistNode= function(value){
        for(var i=0;i<value.length;i++){
            var playlistNode ={"id": value[i].id,"label": value[i].name };
            $scope.backendPlaylists.push(playlistNode);
        }
    };

    $scope.dropdownSettings = {
        scrollableHeight: '100px',
        scrollable: true,
    };

    $scope.dropdownTexts = {
        buttonDefaultText: 'Select Playlists',
    };

}
