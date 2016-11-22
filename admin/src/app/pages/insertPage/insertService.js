angular.module('insert')
  .service('insertService', ['dataContext', insertServ]);

/** @ngInject */
function insertServ(dataContext) {

  this.addUser = function(data){
      dataContext.postData("add/user",data);
      return 200;
  };

  this.addRole = function(data){
      dataContext.postData("role",data);
      return 200;
  };

  this.getRoles = function(){
      return dataContext.getData("role");
  };
}
