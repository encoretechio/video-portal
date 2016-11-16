angular.module('insert')
  .service('insertService', ['dataContext', insertServ]);

/** @ngInject */
function insertServ(dataContext) {

  this.addUser = function(data){
      dataContext.setData("add/user",data);
      return 200;
  };

  this.addRole = function(data){
      dataContext.setData("role",data);
      return 200;
  };

  this.getRoles = function () {
      return dataContext.getData("role");
  }
}
