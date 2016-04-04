angular.module('wsScriptLoader')
  .controller('wsScriptLoaderController', ['wsScriptLoader', function(wsScriptLoader) {

      var wsScriptLoaderCtrl = this;

      wsScriptLoaderCtrl.scriptName = "";

      wsScriptLoaderCtrl.addScript = function() {
        console.info('Inserting script...');
        wsScriptLoader.insertScriptTag('myScript', function() {
          console.info("Error : script already added !");
        });
      };
  }]);
