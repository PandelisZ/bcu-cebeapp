'use strict';

describe('Controller: CeberouteCtrl', function () {

  // load the controller's module
  beforeEach(module('cebeApp'));

  var CeberouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CeberouteCtrl = $controller('CeberouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CeberouteCtrl.awesomeThings.length).toBe(3);
  });
});
