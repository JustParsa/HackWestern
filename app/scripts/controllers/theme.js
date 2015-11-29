'use strict';

angular.module('dynamoUiApp')
.controller('ThemeCtrl', function ($scope, $routeParams) {
    $scope.themeObj = {}
    var myOriginalFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    $scope.save_item = function(theme) {
        myOriginalFirebaseRef.child($routeParams['appId']).child("theme").set($scope.current_theme);
    }
    // sync down from server
    var list = [];
    var ref = myOriginalFirebaseRef.child("YOLOAPP").child("theme");
    ref.on('value', function(snap) { 
        $scope.current_theme = snap.val();
        $scope.$apply();
    });
});
