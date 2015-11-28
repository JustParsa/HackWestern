'use strict';

angular.module('dynamoUiApp')
  .controller('ButtonsCtrl', function ($scope, $routeParams) {
    var myOriginalFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    var myFirebaseRef = myOriginalFirebaseRef.child($routeParams['appId']).child("buttons");
 	$scope.themeObj = {};
    $scope.current_text_view = {};
    $scope.save_item = function(text_view) {
      myFirebaseRef.child($scope.current_text_view.buttonName).set(text_view);
      myOriginalFirebaseRef.child($routeParams['appId']).set($scope.theme);
    };
});