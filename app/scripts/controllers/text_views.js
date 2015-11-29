'use strict';

angular.module('dynamoUiApp')
  .controller('TextViewsCtrl', function ($scope, $routeParams) {
    var myFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    myFirebaseRef = myFirebaseRef.child($routeParams['appId']).child("text_views");

    $scope.items = [];
    $scope.text_views = [];
    // $scope.app_name = $routeParams['appId'];

    $scope.add = function () {
      $scope.text_views.push({
      	ui_name: "",
        ui_name_placeholder: "enter name",
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

    $scope.existing_text_views = [];

    myFirebaseRef.on('value', function(snap) {
        var data = snap.val();
        $scope.existing_text_views = Object.keys(data).map((key) => {
            var obj = data[key];
            obj._key = key;
            return obj;
        });
        $scope.$apply();
    });

    $scope.save_item = function(text_view) {
    	if (text_view.ui_name.length != 0){
    		var str = text_view.ui_name;
    		var obj = {}
    		obj[text_view.ui_name] = {
    			ui_name: text_view.ui_name,
	        font_size: text_view.font_size,
	        text: text_view.text,
	        color:text_view.color,
	        font_color:text_view.font_color,
    		};
    		console.log(obj);
      	myFirebaseRef.update(obj);
      	$scope.text_views = [];
    	}
    }

    $scope.colorChange = function(id, hex) {
    	var foo = {};
    	foo[id]=hex;
	    myFirebaseRef.child($scope.current_text_view.textViewName).update(foo);
    }

    // color picker
    var colpick = $('.demo').each(function() {
	    $(this).minicolors({
	      control: $(this).attr('data-control') || 'hue',
	      inline: $(this).attr('data-inline') === 'true',
	      letterCase: 'lowercase',
	      opacity: false,
	      change: function(hex, opacity) {
	        if(!hex) return;
	        if(opacity) hex += ', ' + opacity;
	        try {
	          $scope.colorChange($(this).attr('id'), hex);
	          // console.log($(this).attr('id'));
	          console.log(hex);
	        } catch(e) {}
	        $(this).select();
	      },
	      theme: 'bootstrap'
	    });
  });

});

