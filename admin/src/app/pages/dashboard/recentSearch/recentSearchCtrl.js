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
        text: '"This video is very informative"',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Shanika',
        surname: 'Ediriweera',
        header: 'Posted a new message',
        text: '"Vader and Me"',
        time: 'Today 9:30 pm',
        ago: '3 hrs ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Janaka',
        surname: 'Chathuranga',
        header: 'Posted a new message',
        text: '"My little kitten"',
        time: 'Today 2:20 pm',
        ago: '10 hrs ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Pranidhith',
        surname: 'Munasinghe',
        header: 'Posted new message',
        text: 'Haha lol',
        time: '11.11.2015',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Nadun',
        surname: 'Indunil',
        header: 'PPosted new message',
        text: '"New York, USA"',
        time: '11.11.2015',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Ravindu',
        surname: 'Hasantha',
        header: 'Posted new message',
        text: "First snake: I hope I'm not poisonous. Second snake: Why? First snake: Because I bit my lip!",
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