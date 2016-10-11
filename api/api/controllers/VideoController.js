/**
 * VideoController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//getUsersWhoCanAnswerComments - Send users list who can answer comments with contact details 
  	getUsersWhoCanAnswerComments: function(request, response){
  		// var video = sails.middleware.blueprints.findOne(request, response);
  		// var video = {};
  		// Video.find(request.params.id).exec(function(error, videos){
  		// 	if (error) {
    // 			// handle error here- e.g. `res.serverError(err);`
    // 			return;
  		// 	}
  		// 	video = videos[0];
  		// });

  		// User.find(id in video[]).exec(function(error, users){
  		// 	if (error) {
    // 			// handle error here- e.g. `res.serverError(err);`
    // 			return;
  		// 	}
  		// 	var userArray = [];
  		// 	for (user of users){
  		// 		var tempUser = {};
  		// 		tempUser.fullName = user.firstName + ' ' + user.lastName;
  		// 		tempUser.id = user.id;
  		// 		tempUser.email = user.email;
  		// 		tempUser.contactNumber = user.contactNumber;
  		// 		tempUser.designation = user.designation;
  		// 		userArray.push(tempUser);
  		// 	}
  		// 	response.json(userArray);
  		// });
  	},
};

