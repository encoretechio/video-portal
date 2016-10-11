// api/services/PlaylistService.js

var PlaylistService = {

  /**
   * for the given playlist_id
   * get the list of users who can answer the comments
   * get users with contact details
   */
  getUsersWhoCanAnswerComments: function (options, callback){
    var users = [];
    var user_ids = [];
    
    // db query to get playlist populated with users
    Playlist.find(options.playlist_id).populate('users_who_can_answer_comments').exec(function(error, playlists){
      if (error) {
        console.log("error in plylist service");
        // handle error here- e.g. `res.serverError(err);`
        return;

      }else if ( playlists.length > 0){
        var playlist = playlists[0];
        
        // loop to add user ids to array
        for (user of playlist.users_who_can_answer_comments){
          user_ids.push(user.id);
        }

        // call user service to get user contact details
        UserService.getUserList({
          user_id_list : user_ids
        }, function getUserList(error, users){
          if (!error) {
            // call back to send users array
            callback(null, users);    
          }
        });
      }
    });
  },
};

module.exports = PlaylistService;
