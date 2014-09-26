'use strict';
/* global app:true */

/**
 * @ngdoc overview
 * @name cupperApp
 * @description
 * # cupperApp
 *
 * Main module of the application.
 */

var app = angular
  .module('cupperApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);


  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
      })
      .when('/play/:gameId', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.constant('FIREBASE_URL', 'https://amber-torch-2724.firebaseio.com/');

