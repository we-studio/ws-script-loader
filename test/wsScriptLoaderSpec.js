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

  it('method insertScriptTag should add script into the DOM', function() {

    var data = {
      scriptName: 'randy',
      callback: function() {
        console.error('Hello !');
      }
    };

    var element = wsScriptLoaderService.insertScriptTag(data.scriptName, data.callback);
    var src = angular.element(element).attr('src');
    var onload = angular.element(element).attr('onload');

    expect(src).toBeDefined();
    expect(src).toEqual('randy');

    expect(onload).toBeDefined();
    expect(onload).toEqual(data.callback);
  });

  // For loadScriptTag
  it('method loadScriptTag should add script into the DOM', function() {

    var data = {
      scriptName: 'randy'
    };

    var element = wsScriptLoaderService.loadScriptTag(data.scriptName);
    var src = angular.element(element).attr('src');
    var onload = angular.element(element).attr('onload');

    expect(src).toBeDefined();
    expect(src).toEqual('randy');

    expect(onload).toBeDefined();
    expect(onload).toEqual(data.callback);
  });

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
});
