'use strict';

/**
 * @ngdoc function
 * @name cebeApp.controller:CentresCtrl
 * @description
 * # CentresCtrl
 * Controller of the cebeApp
 */
angular.module('cebeApp')
  .controller('CentresCtrl', function ($scope, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.centre = $routeParams.id;
  });
