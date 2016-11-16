(function () {
    'use strict';

    angular.module('commonServices')
      .service('dataContext',function($http,connectInfo){

        this.setData = function(route,postData){
            console.log(connectInfo.url + ":" + connectInfo.port + "/" + route);

            //Test method to POST data example.
            $http({
                method  : 'POST',
                url     : connectInfo.url + ":" + connectInfo.port + "/" + route,
                data    : postData,
                headers : {'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers',
                    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjcsImlhdCI6MTQ3OTE0MzAxMX0.UsEWUST-2WXOiUvc9WVUG59h4TDaGeg4CdD_rpgbc8E'}

            })
                .success(function(data) {
                  if (data.errors) {
                    // Showing errors.
                    console.log(data.errors);
                  } else {
                    console.log(data);
                  }
            });

            return 200;
        }
        
        this.getData= function (route) {

            /*$http.get(connectInfo.url + ":" + connectInfo.port + "/" + route).success(function(data) {

            }).error(function (){
                alert("an unexpected error occurred!!!");
            })*/

            $http({
                method: 'GET',
                url: connectInfo.url + ":" + connectInfo.port + "/" + route,
                headers : {'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjcsImlhdCI6MTQ3OTE0MzAxMX0.UsEWUST-2WXOiUvc9WVUG59h4TDaGeg4CdD_rpgbc8E'}
            }).success(function (data) {
                return data;
            }).error(function (){
                alert("an unexpected error occurred!!!");
            });
        }
      });
})();
