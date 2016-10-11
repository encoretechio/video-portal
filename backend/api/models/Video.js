/**
 * Video.js
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

        
        title: {
            type: 'string',
      		size: 128,
            required: true
        },

        link: {
            type: 'string',
      		size: 256,
        },

        // many to many relationship with playlist
        playlists: {
        	collection: 'playlist',
        	via: 'video',
        	through: 'playlisthasvideo'
        },

        // one to many relationship with comment
        comments: {
        	collection: 'comment',
        	via: 'video'
        }
  	}
};

