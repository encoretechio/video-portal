angular.module('user')
  .controller('userController', userCtrl);

/** @ngInject */
function userCtrl($scope, $state,$stateParams, $timeout) {

    $scope.userID = $stateParams.userID;
    $scope.users = {
        "user1" : {
            "id" : "1",
            "username" : "Panii",
            "firstname" : "Pranidhith",
            "lastname" : "Munasinghe",
            "role" : "System Admin",
            "contactNo" : "071111111",
            "designation":"Sales Manager",
            "email":"prani@gmail.com",
            "playlists" : [{
                "id" : "1",
                "name" : "playListName1",
                "videos" : [{
                    "id" : "1",
                    "title" : "videoTitle1",
                    "description" : "videoDescription1",
                    "length" : "5mins"
                }, {
                    "id" : "2",
                    "title" : "videoTitle2",
                    "description" : "videoDescription2",
                    "length" : "5mins"
                }, {
                    "id" : "3",
                    "title" : "videoTitle3",
                    "description" : "videoDescription3",
                    "length" : "5mins"
                }
                ]
            }, {
                "id" : "2",
                "name" : "playListName2",
                "videos" : [{
                    "id" : "1",
                    "title" : "videoTitle1",
                    "description" : "videoDescription1",
                    "length" : "5mins"
                }, {
                    "id" : "2",
                    "title" : "videoTitle2",
                    "description" : "videoDescription2",
                    "length" : "5mins"
                }, {
                    "id" : "3",
                    "title" : "videoTitle3",
                    "description" : "videoDescription3",
                    "length" : "5mins"
                }
                ]
            }, {
                "id" : "2",
                "name" : "playListName2",
                "videos" : [{
                    "id" : "1",
                    "title" : "videoTitle1",
                    "description" : "videoDescription1",
                    "length" : "5mins"
                }, {
                    "id" : "2",
                    "title" : "videoTitle2",
                    "description" : "videoDescription2",
                    "length" : "5mins"
                }, {
                    "id" : "3",
                    "title" : "videoTitle3",
                    "description" : "videoDescription3",
                    "length" : "5mins"
                }
                ]

            }
            ]
        }
    };

    $scope.basicConfig = {
        core: {
            multiple: false,
            check_callback: true,
            worker: true
        },
        'types': {
            'folder': {
                'icon': 'ion-ios-folder'
            },
            'default': {
                'icon': 'ion-document-text'
            }
        },
        'plugins': ['types'],
        'version': 1
    };

    $scope.treeData =[];

    for(var i=0;i<$scope.users.user1.playlists.length;i++){
        var playlistNode ={"id": i ,"parent": "#", "type": "folder", "text": $scope.users.user1.playlists[i].name,"state": {  "opened": true  } }
        $scope.treeData.push(playlistNode);
        for(var j=0; j<$scope.users.user1.playlists[i].videos.length;j++){
            var videoNode ={"id": i+"."+j ,"parent": i, "text": $scope.users.user1.playlists[i].videos[j].description,"state": {  "opened": true  } }
            $scope.treeData.push(videoNode);
        }
    }


}
