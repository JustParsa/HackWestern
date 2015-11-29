'use strict';
angular.module('dynamoUiApp')
  .controller('TempCtrl', function ($scope) {
	  	$location.path = '/dashboard';
	  });
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
	
		// setTimeout(function(){console.log(list);
		// 	$scope.abc=list;
		// 	console.log($scope.abc);
		// }, 5000);

});
