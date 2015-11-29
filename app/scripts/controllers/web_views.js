'use strict';

angular.module('dynamoUiApp')
  .controller('WebViewsCtrl', function ($scope, $routeParams) {
    var myFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    myFirebaseRef = myFirebaseRef.child($routeParams['appId']).child("web_views");
    
    myFirebaseRef.on("value", function(snapshot) {
        var data = snapshot.val();
        $scope.existing_web_views = Object.keys(data).map((key) => {
            var obj = data[key];
            obj._key = key;
            return obj;
        });
        $scope.$apply();
    });

    $scope.current_text_view = {};
    $scope.save_item = function(text_view) {
      myFirebaseRef.child($scope.current_text_view.webViewName).set(text_view);
    };
});
