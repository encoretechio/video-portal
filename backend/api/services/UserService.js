// api/services/UserService.js

var UserService = {

  /**
   * get a single user from the database
   * 
   */
  getSingleUser: function (options, callback){
    var tempUser = {};

    User.find(options.user_id).exec(function(error, users){
      if (error) {
        // handle error here- e.g. `res.serverError(err);`
        return;

      }else if ( users.length > 0){
        var user = users[0];
   
        tempUser.name = user.firstName + ' ' + user.lastName;
        tempUser.id = user.id;
        tempUser.email = user.email;
        tempUser.contactNumber = user.contactNumber;
        tempUser.designation = user.designation;

      }
      callback(null, tempUser);
    });

  },

  /**
   * get a list of users
   * with contact details
   */
  getUserList: function (options, getUsersCallback){
    var userArray = [];

    // variable to count items processed inorder to call callback when all items are processed
    var items_processed = 0;  

    var id_list = options.user_id_list;

    for(id of id_list){
      // db query
      User.find(id).exec(function(error, users){
        items_processed++;
        
        if (error) {
          // handle error here- e.g. `res.serverError(err);`
          return;

        }else if ( users.length > 0){
          var user = users[0];
          // temp user object
          var tempUser = {};
          tempUser.name = user.firstName + ' ' + user.lastName;
          tempUser.id = user.id;
          tempUser.email = user.email;
          tempUser.contactNumber = user.contactNumber;
          tempUser.designation = user.designation;
          userArray.push(tempUser);

          // call callback when all items are processed  
          if(items_processed == id_list.length){
            getUsersCallback(null, userArray);
          }  
        }
      });        
    }    
  },

};

module.exports = UserService;
