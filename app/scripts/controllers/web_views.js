
angular.module('dynamoUiApp')
  .controller('WebViewsCtrl', function ($scope, $routeParams, $firebaseArray) {
    var myFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    myFirebaseRef = myFirebaseRef.child($routeParams['appId']).child("web_views");
    $scope.web_views = [];

    $scope.existing_web_views = $firebaseArray(myFirebaseRef);
 
    // $scope.app_name = $routeParams['appId'];

    $scope.add = function () {
      $scope.web_views.push({ 
        webViewName: "",
        webViewName_placeholder: "enter name",
        page_url: "",
        page_url_placeholder: "url",
        height: "",
        height_placeholder: "height",
        width: "",
        width_placeholder: "width",
        color: "",
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
                page_url: web_view.page_url,
                height: web_view.height,
                width:web_view.width,
                color:web_view.color,
            };
            myFirebaseRef.update(obj);
            $scope.web_views = [];
        }
    }

});
