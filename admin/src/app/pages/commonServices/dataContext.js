(function () {
    'use strict';

    angular.module('commonServices')
      .service('dataContext',function($http,connectInfo){

        this.getData = function(route,postData){
            console.log(connectInfo.url + ":" + connectInfo.port + "/" + route);

            //Test method to POST data example.
            $http({
                method  : 'POST',
                url     : 'https://httpbin.org/post',
                data    : postData,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
               })
                .success(function(data) {
                  if (data.errors) {
                    // Showing errors.
                    //console.log(data.errors);
                  } else {
                    console.log(data);
                  }
            });

            return 200;
        }
      });
})();
