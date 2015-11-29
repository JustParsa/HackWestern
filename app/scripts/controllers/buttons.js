'use strict';

angular.module('dynamoUiApp')
  .controller('ButtonsCtrl', function ($scope, $routeParams) {
    var myOriginalFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    var myFirebaseRef = myOriginalFirebaseRef.child($routeParams['appId']).child("buttons");
    $scope.current_text_view = {};
    $scope.save_item = function(text_view) {
      myFirebaseRef.child($scope.current_text_view.buttonName).set(text_view);
    };

    myFirebaseRef.on("value", function(snapshot) {
        var data = snapshot.val();
        $scope.existing_buttons = Object.keys(data).map((key) => {
            var obj = data[key];
            obj._key = key;
            return obj;
        });
        $scope.$apply();
    });

});
