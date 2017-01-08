/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('recentSearchCtrl', recentSearchCtrl);

  /** @ngInject */
  function recentSearchCtrl($scope) {
    $scope.feed = [
      {
        type: 'text-message',
        author: 'Udara',
        surname: 'Bibile',
        header: 'Posted new message',
        text: 'Sales Executive, Kottawa Branch',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Shanika',
        surname: 'Ediriweera',
        header: 'Posted a new message',
        text: 'Sales Manager, Maharagama Branch',
        time: 'Today 9:30 pm',
        ago: '3 hrs ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Janaka',
        surname: 'Chathuranga',
        header: 'Posted a new message',
        text: 'Head of Distribution, Colombo Head Office',
        time: 'Today 2:20 pm',
        ago: '10 hrs ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Pranidhith',
        surname: 'Munasinghe',
        header: 'Posted new message',
        text: 'Sales Person, Homagama Branch',
        time: '11.11.2015',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Nadun',
        surname: 'Indunil',
        header: 'Posted new message',
        text: 'Sales Person, Kottawa Branch',
        time: '11.11.2015',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Ravindu',
        surname: 'Hasantha',
        header: 'Posted new message',
        text: 'Sales Manager, Awissawella Branch',
        time: '12.11.2015',
        ago: '3 days ago',
        expanded: false,
      }
    ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();