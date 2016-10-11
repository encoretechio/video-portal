/**
 * PlaylistController
 *
 * @description :: Server-side logic for managing playlists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//getUsersWhoCanAnswerComments - Send users list who can answer comments with contact details 
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

