'use strict';

/**
 * @ngdoc overview
 * @name cebeApp
 * @description
 * # cebeApp
 *
 * Main module of the application.
 */
angular
  .module('cebeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/cebeRoute', {
        templateUrl: 'views/ceberoute.html',
        controller: 'CeberouteCtrl',
        controllerAs: 'cebeRoute'
      })
      .when('/centres/:id', {
        templateUrl: 'views/centres.html',
        controller: 'CentresCtrl',
        controllerAs: 'centres'
      })
      .when('/course/:id', {
        templateUrl: 'views/course.html',
        controller: 'CourseCtrl',
        controllerAs: 'course'
      })
      .when('/email', {
        templateUrl: 'views/email.html',
        controller: 'EmailCtrl',
        controllerAs: 'email'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
