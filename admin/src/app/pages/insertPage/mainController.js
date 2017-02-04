angular.module('BlurAdmin.pages.insert')
  .controller('mainController', mainCtrl);

/** @ngInject */
function mainCtrl($scope, $state) {

    $scope.addUser = function(){
      $state.go('main.insert.addUser');
    };
     $scope.addRole = function(){
      $state.go('main.insert.addRole');
    };
    $scope.addPlaylist = function(){
      $state.go('main.insert.addPlaylist');
    };
    $scope.addVideo = function(){
      $state.go('main.insert.addVideo');
    };
}
