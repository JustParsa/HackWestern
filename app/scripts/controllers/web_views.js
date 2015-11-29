'use strict';

angular.module('dynamoUiApp')
  .controller('WebViewsCtrl', function ($scope, $routeParams) {
    var myFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    myFirebaseRef = myFirebaseRef.child($routeParams['appId']).child("web_views");
    $scope.web_views = [];
    $scope.existing_web_views = [];

    myFirebaseRef.on("value", function(snapshot) {
        var data = snapshot.val();
        $scope.existing_web_views = Object.keys(data).map((key) => {
            var obj = data[key];
            obj._key = key;
            return obj;
        });
        $scope.$apply();
    });

    $scope.add = function () {
      $scope.web_views.push({ 
        webViewName: "",
        webViewName_placeholder: "enter name",
        height: "",
        height_placeholder: "height",
        width:"",
        width_placeholder: "width",
        page_url: "",
        page_url_placeholder: "url",
        color:"",
        color_placeholder: "#ff99ee",
      });
    } // add function

    $scope.hideIfBlank = function (ui_name) {
     // console.log(ui_name.length)
     if (ui_name.length == 0)
      return true;
    else 
      return false;
    }

    $scope.save_item = function(web_view) {
        if (web_view.webViewName.length != 0){
            var str = web_view.webViewName;
            var obj = {}
            obj[web_view.webViewName] = {
                webViewName: web_view.webViewName,
                height: web_view.height,
                width: web_view.width,
                page_url: web_view.page_url,
                color: web_view.color,
            };
            // console.log(obj);
            myFirebaseRef.update(obj);
            $scope.web_views = [];
        }
    }
});
