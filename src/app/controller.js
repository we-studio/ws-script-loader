angular.module('wsScriptLoader')
  .controller('wsScriptLoaderController', ['wsScriptLoader', function(wsScriptLoader) {

      var wsScriptLoaderCtrl = this;

      wsScriptLoaderCtrl.scriptName = "";

      wsScriptLoaderCtrl.addScript = function(scriptName) {
        console.info('Inserting script...');
        wsScriptLoader.insertScriptTag(scriptName, function() {
          console.error("Error : script already added !");
        });
      };
  }]);
