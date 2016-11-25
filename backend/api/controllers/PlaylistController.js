/**
 * PlaylistController
 *
 * @description :: Server-side logic for managing playlists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   // createPlaylist - create a playlist
  //  can create with associations - refer video-portal/client/src/app/mock-data/create-Playlist.json.js
   createPlaylist: function(request, response){
     var playlist = request.body;
     Playlist.create(playlist).exec(function (error, playlist){
       if (error) {
         return response.serverError(error);
       }

       sails.log('playlist\'s id is:', playlist.id);
       return response.json(playlist);
     });
   },

   //getPlaylists - Send all playlists
   getPlaylists: function(request, response){
     Playlist.find().populate('roles_with_access').populate('videos').populate('users_who_can_answer_comments').exec(function(error, playlists){
       if (error) {
         // handle error here- e.g. `res.serverError(err);`
         return;
       }

       response.json(playlists);
     });
   },

   // get Playlist details
   getPlaylist: function(request, response){
     Playlist.findOne(request.params.playlist_id).populate('roles_with_access').populate('videos').populate('users_who_can_answer_comments').exec(function(error, playlist) {
       if(error){
         // handle error
         return response.negotiate(error);
       }

       return response.json(playlist);
     });
   },

	  // getUsersWhoCanAnswerComments - Send users list who can answer comments with contact details
  	getUsersWhoCanAnswerComments: function(request, response){
  		console.log("1playlist id:"+request.param('playlist_id'));
  		PlaylistService.getUsersWhoCanAnswerComments({
        	playlist_id : request.param('playlist_id')
      	}, function getUserListCallback(error, users){
        	if (!error) {
        		console.log("2users array:"+users);
          		response.json(users);
        	}
      	});
  	},

  	// add actions to add/remove users
};
