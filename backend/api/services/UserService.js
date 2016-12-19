// api/services/UserService.js

var Promise = require('promise');

// getUser function with promise
var getUserSync = function(user_id, profile_id) {
    return new Promise(function (resolve, reject) {
        User.find([user_id, profile_id]).populate('adminRole').exec(function(error, users){
          var user;
          if (error) {
            // change reject with HTTP error
            reject(error);
          }else if ( users.length > 0){
            // check which object is user and profile
            if(users[0].id == user_id){
              user = users[0];
              profile = users[1];   
            }else{
              user = users[1];
              profile = users[0];
            }
          }

          // send currentuser profile for all users if requested with currentuser_id
          if(user_id == profile_id){
            resolve(user);
          }else if(user.adminRole.admin){
            // send user profile of the requested user_id for admin users
            resolve(profile);
          }else{
            reject("Access Denied: You do not have admin access to view the requested profile!");
          }
        });
    });
};

// getPlaylists function with promise to get playlists
var getPlaylistIdsSync = function(role_id) {
    return new Promise(function (resolve, reject) {
        RoleHasPlaylist.find({role : role_id}).populate('playlist').exec(function(error, playlists){
          if (error) {
            // change reject with HTTP error
            reject(error);
          }else {
            var playlist_ids = [];
            for (index in playlists){
              var playlist_id = playlists[index]["playlist"]["id"];
              playlist_ids.push(playlist_id);
            }
            console.log("playlist_ids:",playlist_ids);
            resolve(playlist_ids);
          }
        });
    });
};

// getPlaylist function with promise to get playlist with video details
var getPlaylistsSync = function(playlist_ids) {
    return new Promise(function (resolve, reject) {
      // TODO: remove / select unwanted fields after migrating to mongo
        Playlist.find(playlist_ids).populate('videos').exec(function(error, playlists){
          if (error) {
            // change reject with HTTP error
            reject(error);
          }else {
            console.log("playlists:", playlists);
            resolve(playlists);
          }
        });
    });
};

var UserService = {
  /**
   * get a single user from the database
   *
   */
  getSingleUser: function (options, callback){
    var tempUser = {};

    User.find(options.user_id).exec(function(error, users){
      if (error) {
        // handle error here- e.g. `res.serverError(err);`
        return;
      }else if ( users.length > 0){
        var user = users[0];
        tempUser.name = user.firstName + ' ' + user.lastName;
        tempUser.id = user.id;
        tempUser.email = user.email;
        tempUser.contactNumber = user.contactNumber;
        tempUser.designation = user.designation;
      }
      callback(null, tempUser);
    });
  },

  /**
   * get a single user with details of playlists and videos
   *
   */
  getSingleUserDetailed: function (options, callback){
    var result = {};
    console.log("options.user_id:",options.user_id,",options.profile_id:", options.profile_id);
    getUserSync(options.user_id, options.profile_id).then(function(user){
      console.log(user);
      // set user details in result
      result.user = {
        id : user.id,
        username: user.username,
        name: user.firstName + ' ' + user.lastName,
        nickName: user.nickname,
        email: user.email,
        contactNumber: user.contactNumber,
        address: user.streetName+' '+user.town,
        birthday: user.birthday,
        designation: user.designation,
        watchedVideos: user.watchedVideos
      };
      var role_id = user.adminRole.id;
      return getPlaylistIdsSync(role_id);
    }).then(function(playlist_ids){
      return getPlaylistsSync(playlist_ids);
    }).then(function(playlists){
      // set playlist details in result
      result.playlists = playlists;
      callback(null, result);
    }).catch(function(error){
      callback(error, null);
    });
  },


  /**
   * get a list of users
   * with contact details
   */
  //  TODO: MODIFY this.. this can be done using .find(id_list)
  getUserList: function (options, getUsersCallback){
    var userArray = [];

    // variable to count items processed inorder to call callback when all items are processed
    var items_processed = 0;

    var id_list = options.user_id_list;

    for(id of id_list){
      // db query
      User.find(id).exec(function(error, users){
        items_processed++;

        if (error) {
          // handle error here- e.g. `res.serverError(err);`
          return;

        }else if ( users.length > 0){
          var user = users[0];
          // temp user object
          var tempUser = {};
          tempUser.name = user.firstName + ' ' + user.lastName;
          tempUser.id = user.id;
          tempUser.email = user.email;
          tempUser.contactNumber = user.contactNumber;
          tempUser.designation = user.designation;
          userArray.push(tempUser);

          // call callback when all items are processed
          if(items_processed == id_list.length){
            getUsersCallback(null, userArray);
          }
        }
      });
    }
  },

};

module.exports = UserService;
