'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {
    // Get module
    module = angular.module('wsScriptLoader');
    dependencies = module.requires;
  });

  it('should load module', function() {
    expect(hasModule('wsScriptLoader')).to.be.ok;
  });

  

  

  

});