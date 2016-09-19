'use strict';

describe('Controller: CourceCtrl', function () {

  // load the controller's module
  beforeEach(module('cebeApp'));

  var CourceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CourceCtrl = $controller('CourceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CourceCtrl.awesomeThings.length).toBe(3);
  });
});
