'use strict';

angular.module('dynamoUiApp')
  .controller('ImageViewsCtrl', function ($scope, $routeParams) {
    var myFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    myFirebaseRef = myFirebaseRef.child($routeParams['appId']).child("image_views");
    $scope.current_text_view = {};
    $scope.save_item = function(text_view) {
      myFirebaseRef.child($scope.current_text_view.imgViewName).set(text_view);
    };
    myFirebaseRef.on("value", function(snapshot) {
        var data = snapshot.val();
        $scope.existing_image_views = Object.keys(data).map((key) => {
            var obj = data[key];
            obj._key = key;
            return obj;
        });
        $scope.$apply();
    });

});
