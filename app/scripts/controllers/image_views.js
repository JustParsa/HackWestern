
angular.module('dynamoUiApp')
  .controller('ImageViewsCtrl', function ($scope, $routeParams, $firebaseArray) {
    var myFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    myFirebaseRef = myFirebaseRef.child($routeParams['appId']).child("image_views");
    $scope.image_views = [];

    $scope.existing_image_views = $firebaseArray(myFirebaseRef);
 
    // $scope.app_name = $routeParams['appId'];

    $scope.add = function () {
      $scope.image_views.push({ 
        imgViewName: "",
        imgViewName_placeholder: "enter name",
        img_url: "",
        img_url_placeholder: "url",
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

    $scope.save_item = function(img_view) {
        if (img_view.imgViewName.length != 0){
            var str = img_view.imgViewName;
            var obj = {}
            obj[img_view.imgViewName] = {
                imgViewName: img_view.imgViewName,
                img_url: img_view.img_url,
                height: img_view.height,
                width:img_view.width,
                color:img_view.color,
            };
            myFirebaseRef.update(obj);
            $scope.image_views = [];
        }
    }

});
