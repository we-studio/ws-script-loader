angular.module('wsScriptLoader')
  .controller('wsScriptLoaderController', ['wsScriptLoader', function(wsScriptLoader) {

    var wsScriptLoaderCtrl = this;

    wsScriptLoaderCtrl.scriptName = "";

    wsScriptLoaderCtrl.addScript = function(scriptName) {
      wsScriptLoader.loadScriptTag(scriptName);
    };
  }]);
