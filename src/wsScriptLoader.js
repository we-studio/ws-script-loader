angular.module('wsScriptLoader', [])
  .service('wsScriptLoader', function($q) {
    var service = this;

    /** To keep track of already loaded scripts and don't insert twice the same **/
    var loadedScripts = [];

    /**
     * insert a <script> tag at the end of <body>
     * @param tagUrl
     * @param onload callback
     */
    service.insertScriptTag = function (tagUrl, callback) {
      if (loadedScripts.indexOf(tagUrl) < 0) {
        var tag = document.createElement('script');
        tag.src = tagUrl;
        tag.onload = callback;
        document.body.appendChild(tag);

        loadedScripts.push(tagUrl);
      }
      else
      {
        callback();
      }
    };

    /**
     * insert a <script> tag at the end of <body> and returns a promise resolved when script is loaded
     * @param tagUrl
     * @returns {deferred.promise|*}
     */
    service.loadScriptTag = function (tagUrl) {
      var deferred = $q.defer();

      service.insertScriptTag(tagUrl, function () {
        deferred.resolve();
      });

      return deferred.promise;
    };    
  });