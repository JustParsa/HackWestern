'use strict';

angular.module('dynamoUiApp')
  .controller('TextViewsCtrl', function ($scope, $routeParams) {
    var myFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    myFirebaseRef = myFirebaseRef.child($routeParams['appId']).child("text_views");
    $scope.text_views = {};
    $scope.current_text_view = {};
      // $scope.textViewName : {
      //  "font_color" : $scope.fontColor,
      //  "font_size" : $scope.fontSize,
      //  "color" : $scope.color,
      //  "text" : $scope.text
      // }
    $scope.text_views = {};

    // $scope.text_views[$scope.textViewName]["font"]

    $scope.save_item = function(text_view) {
      myFirebaseRef.child($scope.current_text_view.textViewName).set(text_view);
    }
});

