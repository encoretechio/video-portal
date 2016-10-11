/**
 * RoleController
 *
 * @description :: Server-side logic for managing Roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// createRole - create a role
    createRole: function(request, response){
      var role = request.body;
      Role.create(role).exec(function (error, role){
        if (error) { 
          return response.serverError(error); 
        }

        sails.log('role\'s id is:', role.id);
        return response.json(role);
      });
    },

    // deleteRole - delete a role
    deleteRole: function(request,response){
      Role.destroy({
        id : request.param('role_id')
      }).exec(function (error){
        if (error) {
          return response.negotiate(error);
        }
        sails.log('role with the given id was deleted');
        return response.ok();
      });
    },
	
  	//getRoles - Send all roles
  	getRoles: function(request, response){
  		Role.find().populate('viewable_playlists').exec(function(error, roles){
  			if (error) {
    			// handle error here- e.g. `res.serverError(err);`
    			return;
  			}
  			var roleArray = [];
  			for (role of roles){
  				var tempRole = {};
  				tempRole.id = role.id;	
  				tempRole.name = role.name;
  				tempRole.viewable_playlists = role.viewable_playlists;
  				roleArray.push(tempRole);
  			}
  			response.json(roleArray);
  		});
  	},

  	// add playlists which are accessible by the role
  	addPlaylists: function(request, response){
  		Role.findOne(request.params.role_id).exec(function(error, role) {
  			if(error){
  				// handle error
  				return response.negotiate(error);	
  			} 

  			// Queue up a records to be inserted into the join table
  			role.viewable_playlists.add(request.body.playlists);

  			// Save the role, creating the new associations in the join table
  			role.save(function(error) {
  				if (error) {
          			return response.negotiate(error);
        		}
        		sails.log('playlists added');
        		return response.ok();	
  			});
		});
  	},

  	// remove playlists which are accessible by the role
  	removePlaylists: function(request, response){
  		Role.findOne(request.params.role_id).exec(function(error, role) {
  			if(error){
  				// handle error
  				return response.negotiate(error);	
  			} 

  			for (playlist of request.body.playlists){
  				role.viewable_playlists.remove(playlist);
  			}

  			// Save the role, creating the new associations in the join table
  			role.save(function(error) {
  				if (error) {
          			return response.negotiate(error);
        		}
        		sails.log('playlists removed');
        		return response.ok();	
  			});
		});
  	},
};

