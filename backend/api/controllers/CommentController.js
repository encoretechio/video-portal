/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Promise = require('promise');

module.exports = {
	// createComment- create a comment after validating user and video
	createComment: function(request, response){
		// async method to validate user
		var checkUser = function(user_id){
			return new Promise(function (resolve, reject){
				sails.log("Checking for user: " + user_id );
				User.findOne({id:user_id}).exec(function(error, user){
					if(error){
						reject(error);
					}
					if(user == null){
						console.log("Invalid User ID");
						reject("Invalid User ID");
					}
					resolve(user);
				});
			});
		};

		// async method to validate video
		var checkVideo = function(video_id){
			return new Promise(function (resolve, reject){
				sails.log("Checking for video: " + video_id );
				Video.findOne({id:video_id}).exec(function(error, video){
					if(error){
						reject(error);
					}
					if(video == null){
						console.log("Invalid Video ID");
						reject("Invalid Video ID");
					}
					resolve(video);
				});
			});
		};

		// method to create comment
		var addComment = function(comment){
			Comment.create(comment).exec(function (error, comment){
				if (error) {
					return response.serverError(error+"5");
				}
				sails.log('comment added');
				return response.json(comment);
			});
		};

		checkUser(request.body.author).then(function(user){
				console.log(user,"user printed");
				// returning a async method with Promise
				return checkVideo(request.body.video);
			}).then(function(video){
				console.log(video);
				addComment(request.body);
			}).catch(function(error){
				// handling all errors
				return response.json( 401, { err: {
            		status: 'danger',
            		message: response.i18n(error)
          		}});
			});
	},

	getCommentsByVideoID: function(request, response){
		var requestVideoID = request.param('videoID');
		sails.log("CommentController.getCommentsByVideoID " + requestVideoID);

	 	Comment.find({video : requestVideoID})
	 		.populate('author')
			.exec(function(error, comments){
        if (error) {
          return response.serverError(error);
        }
        /*
        else if (comments.length == 0) {
          return response.send(200,"No comments found");
        }*/
				return response.json(comments);
		});
	},

	getCommentsByUserID: function(request, response){
		var userID = request.param('userID');
		sails.log("CommentController.getCommentsByUserID " + userID);

	 	Comment.find({author : userID})
	 		.populate('video')
			.exec(function(error, comments){
        if (error) {
          return response.serverError(error);
        }
        /*
        else if (comments.length == 0) {
          return response.send(200,"No comments found");
        }
        */
				return response.json(comments);
		});
	}

};
