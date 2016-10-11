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



  	// editUser - POST update details with UserID
  	editUser: function(request,response){
  		var data = request.body;
  		User.update(request.params.user_id, data, function(error, updated) {
        	if (error) {
    			// handle error here- e.g. `res.serverError(err);`
    			return;
  			}

  			console.log('Updated user to have name ' + updated[0].name);
  			response.json(updated);
    	});
  	}
};
