/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope) {
      $scope.feed = [
      {
        type: 'text-message',
        author: 'Pranidhith',
        surname: 'Munasinghe',
        header: 'Posted new message',
        text: 'This Video Portal is a really good motive. Keep up the good work',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'video-message',
        author: 'Nadun',
        surname: 'Indunil',
        header: 'Added new video',
        text: '"Videogular Earth"',
        preview: 'app/feed/earth-preview.png',
        link: 'http://static.videogular.com/assets/videos/videogular.mp4',
        time: 'Today 9:30 pm',
        ago: '3 hrs ago',
        expanded: false,
      }, {
        type: 'image-message',
        author: 'Shanika',
        surname: 'Ediiweera',
        header: 'Added new image',
        text: '"My little kitten"',
        preview: 'app/feed/my-little-kitten.png',
        link: 'http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg',
        time: 'Today 2:20 pm',
        ago: '10 hrs ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Ravindu',
        surname: 'Hasantha',
        header: 'Posted new message',
        text: 'Hi! I\'m new to video portal',
        time: '11.11.2015',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'geo-message',
        author: 'Janaka',
        surname: 'Chathuranga',
        header: 'Posted location',
        text: '"Was at New York, USA"',
        preview: 'app/feed/new-york-location.png',
        link: 'https://www.google.by/maps/place/New+York,+NY,+USA/@40.7201111,-73.9893872,14z',
        time: '11.11.2015',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Nadun',
        surname: 'Indunil',
        header: 'Posted new message',
        text: "There is an error in the video in my playlist 1. Can you please check and correct it?",
        time: '12.11.2015',
        ago: '3 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Shanika',
        surname: 'Ediriweera',
        header: 'Posted new message',
        text: 'Can you send me some more information regarding the video 1 on playlist 2?',
        time: '14.11.2015',
        ago: '5 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Pranidhith',
        surname: 'Munasinghe',
        header: 'Posted new message',
        text: 'Is there a way to save these vidoes to my local drive?',
        time: '14.11.2015',
        ago: '5 days ago',
        expanded: false,
      }, {
        type: 'image-message',
        author: 'Udara',
        surname: 'Bibile',
        header: 'Posted photo',
        text: '"Are you stressed?"',
        preview: 'app/feed/DeStress_AD.png',
        link: 'http://deanlindsay.com/wp-content/uploads/2016/08/DeanSTRESSAD.jpg',
        time: '16.11.2015',
        ago: '7 days ago',
        expanded: false,
      },{
          type: 'text-message',
          author: 'Ravindu',
          surname: 'Hasantha',
          header: 'Posted new message',
          text: '“I \'m a fast learner. I can finish these playlists in less than a day! ;) Just saying :P "',
          time: '15.11.2015',
          ago: '6 days ago',
          expanded: false,
        }
      ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();