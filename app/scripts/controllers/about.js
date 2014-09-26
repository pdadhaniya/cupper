'use strict';

/**
 * @ngdoc function
 * @name cupperApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cupperApp
 */
angular.module('cupperApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
