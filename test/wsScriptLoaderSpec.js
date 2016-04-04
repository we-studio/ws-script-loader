'use strict';

describe('wsScriptLoaderService test', function() {

  var wsScriptLoader;
  var dependencies;
  dependencies = [];
  var $scope, wsScriptLoaderService, mock;

  var hasModule = function(module) {
    return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {
    // Get module
    wsScriptLoader = angular.module('wsScriptLoader');
    dependencies = wsScriptLoader.requires;
  });

  beforeEach(function() {
    mock = {alert: jasmine.createSpy()};
    module(function($provide) {
      $provide.value('wsScriptLoader', mock);
    });

    inject(function($injector) {
      wsScriptLoaderService = $injector.get('wsScriptLoader');
    });
  });

  it('should load module', function() {
    expect(hasModule('wsScriptLoader')).to.be.ok;
  });

  /*** CHECK IF METHODS ARE DEFINED ***/

  it('should have insertScriptTag defined', function() {
    // expect(wsScriptLoaderService.insertScriptTag).toBeDefined();
  });

  it('should have loadScriptTag defined', function() {
    // expect(wsScriptLoaderService.loadScriptTag).toBeDefined();
  });

  /*** CHECK IF METHODS WORK WELL ***/

  // For insertScriptTag

  it('method insertScriptTag should add script node into body', function() {
    // console.log(angular.element(document).find('script'));
  });

  it('method insertScriptTag should add script node into body', function() {

  });

});
