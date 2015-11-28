'use strict';

/**
 * @ngdoc function
 * @name dynamoUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dynamoUiApp
 */
angular.module('dynamoUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
