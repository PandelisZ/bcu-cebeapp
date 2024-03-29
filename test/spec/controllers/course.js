'use strict';

describe('Controller: CourseCtrl', function () {

  // load the controller's module
  beforeEach(module('cebeApp'));

  var CourseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CourseCtrl = $controller('CourseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CourseCtrl.awesomeThings.length).toBe(3);
  });
});
