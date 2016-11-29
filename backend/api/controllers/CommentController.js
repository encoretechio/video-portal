/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var Promise = require('promise');

module.exports = {

	createComment: function(request, response){

		var checkUser = function(user_id){
			return new Promise(function (resolve, reject){
						sails.log("Checking for user: " + user_id );
						User.findOne({id:user_id}).exec(function(error, user){
							if(error){
								reject(error);
							  return response.serverError(error);
							}
							if(user == null){
								reject("Invalid User ID")
								return response.serverError("Invalid userID");
							}
							resolve(user);});
			});
		}
		var checkVideo = function(video_id){
			return new Promise(function (resolve, reject){
						sails.log("Checking for video: " + user_id );
						User.findOne({id:video_id}).exec(function(error, video){
							if(error){
								reject(error);
								return response.serverError(error);
							}
							if(video == null){
								reject("Invalid Video ID")
								return response.serverError("Invalid videoID");
							}
							resolve(video);});
			});
		}
		var addComment = function(comment){
			Comment.create(comment).exec(function (error, comment){
				if (error) {
					return response.serverError(error);
				}
				sails.log('comment added');
				return response.json(comment);
			});
		}

		checkUser(request.body.author)
			.then(checkVideo(request.body.video))
			.then(addComment(request.body));

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
        else if (comments.length == 0) {
          return response.send(200,"No comments found");
        }
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
        else if (comments.length == 0) {
          return response.send(200,"No comments found");
        }
				return response.json(comments);
		});
	}

};
