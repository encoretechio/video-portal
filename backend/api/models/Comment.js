/**
 * Comment.js
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

        
        text: {
            type: 'string',
      		size: 2048,
            required: true
        },

        author: {
        	model: 'user'
        },

        // many to one relationship with video
        video: {
        	model: 'video'
        }
  	}
};
