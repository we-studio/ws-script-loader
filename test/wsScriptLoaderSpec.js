'use strict';

describe('wsScriptLoaderService test', function() {

  var wsScriptLoader;
  var dependencies = [];
  var wsScriptLoaderService;

  var hasModule = function(module) {
    return dependencies.indexOf(module) >= 0;
  };

  beforeEach(module('wsScriptLoader'));

  beforeEach(inject(function($injector) {
    wsScriptLoaderService = $injector.get('wsScriptLoader');
  }));

  it('should load module', function() {
    dependencies = angular.module('wsScriptLoader').requires;
    expect(hasModule('wsScriptLoader')).toBeTruthy();
  });

  /*** CHECK IF METHODS ARE DEFINED ***/

  it('insertScriptTag should be defined', function() {
    expect(wsScriptLoaderService.insertScriptTag).toBeDefined();
  });

  it('loadScriptTag should be defined', function() {
    expect(wsScriptLoaderService.loadScriptTag).toBeDefined();
  });

  /*** CHECK IF METHODS WORK WELL ***/

  // For insertScriptTag

  it('method insertScriptTag should execute the callback when script have already been added !', function() {

    // object created to use spies functionality
    var data = {
      scriptName: 'myScript',
      callback: function() {
        console.error('Script added !');
      }
    };
    spyOn(data, 'callback'); // crate a spy to notice if the callback have been called
    // First call
    wsScriptLoaderService.insertScriptTag(data.scriptName, data.callback);
    // Second call
    wsScriptLoaderService.insertScriptTag(data.scriptName, data.callback);

    expect(data.callback).toHaveBeenCalled(); // suppose to be true
  });

  // For loadScriptTag

  it('method insertScriptTag should the promise when script have already been added !', function() {

    var success = function(success) {
      console.info('Success !');
    };

    var error = function(error) {
      console.error('Error !');
    };

    var scriptName = 'myScript';
    wsScriptLoaderService.loadScriptTag(scriptName).then(success, error);
  });

});
