/**
 * Role.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  		id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true,
            // required: true
        },

        
        name: {
            type: 'string',
      		size: 128,
            required: true
        },	

        // viewable_playlists: {
        // 	collection: 'playlist',
        // 	via: 'roles_with_access',
        // 	dominant: true
        // },

        // many to many relationship with playlist
        viewable_playlists: {
        	collection: 'playlist',
        	via: 'role',
        	// dominant: true,
        	through: 'rolehasplaylist'
        }
  	}
};

