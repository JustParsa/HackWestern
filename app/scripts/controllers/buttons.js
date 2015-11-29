'use strict';

angular.module('dynamoUiApp')
  .controller('ButtonsCtrl', function ($scope, $routeParams) {
    var myOriginalFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    var myFirebaseRef = myOriginalFirebaseRef.child($routeParams['appId']).child("buttons");
    $scope.btn_views = [];
    $scope.existing_buttons = [];

    myFirebaseRef.on("value", function(snapshot) {
        var data = snapshot.val();
        $scope.existing_buttons = Object.keys(data).map((key) => {
            var obj = data[key];
            obj._key = key;
            return obj;
        });
        $scope.$apply();
    });

    $scope.add = function () {
      $scope.btn_views.push({ 
        buttonName: "",
        buttonName_placeholder: "enter name",
        height: "",
        height_placeholder: "height",
        width:"",
        width_placeholder: "width",
        font_size: "",
        font_size_placeholder: "20",
        text: "",
        text_placeholder: "enter text",
        color:"",
        color_placeholder: "#ff99ee",
        font_color:"",
        font_color_placeholder: "#000000",
      });
    } // add function

    $scope.hideIfBlank = function (ui_name) {
     // console.log(ui_name.length)
     if (ui_name.length == 0)
      return true;
    else 
      return false;
    }

    $scope.save_item = function(btn_view) {
        if (btn_view.buttonName.length != 0){
            var str = btn_view.buttonName;
            var obj = {}
            obj[btn_view.buttonName] = {
                buttonName: btn_view.buttonName,
                height: btn_view.height,
                width:btn_view.width,
                color:btn_view.color,
                font_color: btn_view.font_color,
                font_size: btn_view.font_size,
                text: btn_view.text,
            };
            console.log(obj);
            myFirebaseRef.update(obj);
            $scope.btn_views = [];
        }
    }

});
