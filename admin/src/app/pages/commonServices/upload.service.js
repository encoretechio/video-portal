/**
 * Created by prani on 2/14/2017.
 */
(function() {
    'use strict';

    angular.module('S3UploadService', [])
        .service('S3UploadService', ['$q', function($q) {

            AWS.config.update({
                accessKeyId: "",
                secretAccessKey: "",
                region: "us-west-2"  // <- If you want send something to your bucket, you need take off this settings, because the S3 are global.
            });

            var bucket = new AWS.S3({ params: { Bucket: 'letsbuild-videos', maxRetries: 10 }, httpOptions: { timeout: 360000 } });

            this.Progress = 0;
            this.Upload = function (file) {
                var deferred = $q.defer();
                var params = { Bucket: 'letsbuild-videos', Key: file.name, ContentType: file.type, Body: file };
                var options = {
                    // Part Size of 10mb
                    //partSize: 10 * 1024 * 1024,
                    //queueSize: 1,
                    // Give the owner of the bucket full control
                    ACL: 'bucket-owner-full-control'
                };
                var uploader = bucket.upload(params, options, function(err, data) {
                    if (err) {
                        deferred.reject(err);
                    }
                    deferred.resolve();
                });
                uploader.on('httpUploadProgress', function(event) {
                    deferred.notify(event);
                });

                return deferred.promise;
            };
        }]);


})();