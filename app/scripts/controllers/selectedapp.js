'use strict';

angular.module('dynamoUiApp')
  .controller('SelectedAppCtrl', function ($scope, $routeParams) {
  	$scope.currentApp = $routeParams.appId;
});