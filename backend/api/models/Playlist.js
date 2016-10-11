/**
 * Playlist.js
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

        // many to many relationship with role
        roles_with_access: {
        	collection: 'role',
        	via: 'playlist',
        	through: 'rolehasplaylist'
        },

        // many to many relationship with video
        videos: {
        	collection: 'video',
        	via: 'playlist',
        	through: 'playlisthasvideo'
        },

        // association with user
        // user list to keep users who can answer for the comments
        users_who_can_answer_comments: {
        	collection: 'user',
        	via: 'playlist',
        	through: 'usercananswercomments'
        }
  	}
};

