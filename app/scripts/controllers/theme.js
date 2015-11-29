'use strict';

angular.module('dynamoUiApp')
  .controller('ThemeCtrl', function ($scope, $routeParams) {
    $scope.themeObj = {}
    var myOriginalFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    $scope.save_item = function(theme) {
      myOriginalFirebaseRef.child($routeParams['appId']).child("theme").set($scope.themeObj.theme);
    }
});
