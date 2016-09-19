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
    $scope.centre = $routeParams.id;



  });
