/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .controller('lineChartCtrl', lineChartCtrl);

  /** @ngInject */
  function lineChartCtrl($scope) {
    $scope.labels =["May", "June", "Jule", "August", "September", "October", "November"];
    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 88, 27, 45]
    ];
    $scope.series = ['Playlist A', 'Playlist B'];


    $scope.changeData = function () {
      $scope.data[0] = shuffle($scope.data[0]);
      $scope.data[1] = shuffle($scope.data[1]);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }
  }

})();