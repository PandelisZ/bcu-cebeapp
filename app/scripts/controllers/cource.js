'use strict';

/**
 * @ngdoc function
 * @name cebeApp.controller:CourceCtrl
 * @description
 * # CourceCtrl
 * Controller of the cebeApp
 */
angular.module('cebeApp')
.factory('getSchedule', function($http) {
  return {
    async: function() {
      return $http.get('scripts/schedule.json');  //1. this returns promise
    }
  };
})
  .controller('CourceCtrl', function (getSchedule, $http, $scope, $routeParams) {
    $scope.courceName = $routeParams.id;

    function searchSchedule(data,searchString) {
      var result = [];
      for (var i = 0; i < data.length; i++){
        if (data[i].cource === searchString) {
          result.push(data[i]);
        }
      }
      return result;
    }

    getSchedule.async().then(function(d) { //2. so you can use .then()
    $scope.schedule = searchSchedule(d.data, $scope.courceName);

  });






  });
