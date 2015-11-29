angular.module('dynamoUiApp')
  .controller('DashboardCtrl', function ($scope) {
  	var ref = new Firebase("https://hackwestern.firebaseio.com/");
  	$scope.apps = []

	// Attach an asynchronous callback to read the data at our posts reference
	ref.on("value", function(snapshot) {
	  $scope.apps = Object.keys(snapshot.val());
	  // console.log($scope.apps);
	  $scope.$apply();
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});

});