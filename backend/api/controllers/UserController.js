/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // createUser - create a user
    createUser: function(request, response){
      var user = request.body;
      User.create(user).exec(function (error, user){
        if (error) {
          return response.serverError(error);
        }

        sails.log('user\'s id is:', user.id);
        return response.json(user);
      });
    },

    // deleteUser - delete a user
    deleteUser: function(request,response){
      User.destroy({
        id : request.param('user_id')
      }).exec(function (error){
        if (error) {
          return response.negotiate(error);
        }
        sails.log('user with the given id was deleted');
        return response.ok();
      });
    },

  	//getUsers - Send all users but not all details : Name, ID, Phone, email, designation
  	getUsers: function(request, response){
  		User.find().exec(function(error, users){
  			if (error) {
    			// handle error here- e.g. `res.serverError(err);`
    			return;
  			}
  			for (user of users){
  				user.name = user.firstName + ' ' + user.lastName;
  			}
  			response.json(users);
  		});
  	},


  	// getUser - send limited details od a user
  	getUser: function(request, response){

      UserService.getSingleUser({
        user_id : request.param('user_id')
      }, function getSingleUserCallback(error, user){
        if (!error) {
          response.json(user);
        }
      });
  	},

    // getCurrentUser - send limited details of the logged in user
  	getCurrentUser: function(request, response){
      // user_id is assigned to request.token from the 'authToken' policy
      console.log(request.token);
      var userId = request.token
      UserService.getSingleUser({
        user_id : userId
      }, function getSingleUserCallback(error, user){
        if (!error) {
          response.json(user);
        }
      });
  	},

    // getUserProfile - send playlists, videos details of the requested user_id for admin,
    // send currentuser profile for normal users if requested with currentuser_id
  	getuserProfile: function(request, response){
      var userId = request.token;
      var requested_profile_id = request.params.user_id;
      console.log("1");
      UserService.getSingleUserDetailed({
        user_id : userId,
        profile_id : requested_profile_id
      }, function getSingleUserDetailedCallback(error, profile){
        if (!error) {
          console.log("end"+profile);
          response.json(profile);
        }else{
          console.log("end"+error);
          response(error);
        }
      });
  	},



  	// editUser - POST update details with UserID
  	editUser: function(request,response){
  		var data = request.body;
  		User.update(request.params.user_id, data, function(error, updated) {
        	if (error) {
    			// handle error here- e.g. `res.serverError(err);`
    			return error;
  			}

  			console.log('Updated user to have name ' + updated[0].name);
  			response.json(updated);
    	});
  	},

    // updateVideo - update watched times of user's videos
    updateVideo: function(request, response){
      // TODO: validate video id - get a list of video ids using a route and call using a sync method
      // object to keep info sent in request
      var watchedVideos = {};
      User.findOne(request.params.user_id).exec(function(error, user){
  			if (error) {
    			// handle error here- e.g. `res.serverError(err);`
    			return error;
  			}
        watchedVideos = request.body;
        console.log(watchedVideos);
        for (id in watchedVideos){
          user.watchedVideos[id] = watchedVideos[id];
        }
        user.save(function(error) {
  				if (error) {
          		return response.negotiate(error);
        	}
        	sails.log('videos updated');
        	response.json(user.watchedVideos);
  			});
  		});
    },
};
