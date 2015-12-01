'use strict';

angular.module('dynamoUiApp')
.controller('ThemeCtrl', function ($scope, $routeParams, $firebaseObject) {
    var myOriginalFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/').child($routeParams['appId']);
    $scope.themeObj = $firebaseObject(myOriginalFirebaseRef)
});
