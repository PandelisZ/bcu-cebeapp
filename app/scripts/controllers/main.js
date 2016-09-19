'use strict';

/**
 * @ngdoc function
 * @name cebeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cebeApp
 */
angular.module('cebeApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.dmt = ['Digital Media Technology','Film Production Technology','Film Technology and Visual Effects','Music Technology','Sound Engineering and Production'];
    $scope.engineering = ['Mechanical Engineering Group 1','Mechanical Engineering Group 2','Automotive Engineering','Foundation Year Group 1 ','Foundation Year Group 2','Electronic Engineering'];
    $scope.computing = ['Computer Networks','Computer Networks Security','Information Communications Technology','Business Information Technology','Computer Games Technology','Forensic Computing','Computer Science'];
  });
