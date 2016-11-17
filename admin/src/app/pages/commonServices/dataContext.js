(function () {
    'use strict';

    angular.module('commonServices')
      .service('dataContext',function($http,connectInfo){


        this.getData = function(route){
            var returnData = {};
            console.log("GET data");
            console.log(connectInfo.url + ":" + connectInfo.port + "/" + route);

            //Test method to POST data example.
            $http({
                method  : 'GET',
                url     : connectInfo.url + ":" + connectInfo.port + "/" + route,
                //data    : postData,
                headers : { 'Content-Type': 'application/json',
                            'Authorization' : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlhdCI6MTQ3OTIyMjM0OX0.WAi12LVaNRQAjck2CnLDKifM1DHrTBnz9jtf6HXCel4',
                            //'Access-Control-Request-Headers' : '*'
                          }
               })
                .success(function(data) {
                  if (data.errors) {
                    // Showing errors.
                    //console.log(data.errors);
                  } else {
                    returnData == data;
                    console.log(data);
                  }
            });

            return returnData;
        };

        this.postData = function(route,postData){
            console.log("POST data");
            console.log(connectInfo.url + ":" + connectInfo.port + "/" + route);
            console.log(postData);

            //Test method to POST data example.
            $http({
                method  : 'POST',
                url     : connectInfo.url + ":" + connectInfo.port + "/" + route,
                data    : postData,

                headers : { 'Content-Type': 'application/json',
                            'Authorization' : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlhdCI6MTQ3OTIyMjM0OX0.WAi12LVaNRQAjck2CnLDKifM1DHrTBnz9jtf6HXCel4'
                          }
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

      });
})();
