// api/services/UserService.js

var Promise = require('promise');

// getUser function with promise
var getUserSync = function(user_id, profile_id) {
    return new Promise(function (resolve, reject) {
        User.find(user_id).populate('adminRole').exec(function(error, users){
          var user;
          if (error) {
            // change reject with HTTP error
            reject(error);
          }else if ( users.length > 0){
            user = users[0];
          }
          
          // send currentuser profile for all users if requested with currentuser_id
          if(user_id == profile_id){
            resolve(user);
          }else if(user.adminRole.admin){
            // send user profile of the requested user_id for admin users
            resolve(user);
          }else{
            reject("Access Denied: You do not have admin access to view the requested profile!");
          }    
        });
    });
};

// getPlaylists function with promise to get playlists and video deyalis of a user
var getPlaylistsSync = function(role_id) {
    return new Promise(function (resolve, reject) {
        Playlist.find({roles_with_access : role_id}).populate('videos').exec(function(error, playlists){
          if (error) {
            // change reject with HTTP error
            reject(error);
          }else {
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

    getUserSync(options.user_id, options.profile_id).then(function(user){
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
        designation: user.designation
      };
      var role_id = user.adminRole.id;
      return getPlaylistsSync(role_id);
    }).then(function(playlists_with_videos){
      // set playlist details in result
      result.playlists = playlists_with_videos;
    }).catch(function(error){
      callback(error, null);
    });

    callback(null, result);
  },

  
  /**
   * get a list of users
   * with contact details
   */
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
