'use strict';

angular.module('dynamoUiApp')
  .controller('SelectedAppCtrl', function ($scope, $routeParams, $location) {
  	$scope.selectedApp = $routeParams.appId;

  	$scope.routeToViews = function(viewName) {
  		var newURL = "/account/" + $scope.selectedApp + "/" + viewName;
		$location.path(newURL);
  	};
});