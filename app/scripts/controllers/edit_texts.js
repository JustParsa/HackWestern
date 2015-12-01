angular.module('dynamoUiApp')
  .controller('EditTextsCtrl', function ($scope, $routeParams, $firebaseObject, $firebaseArray) {
    var myFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    myFirebaseRef = myFirebaseRef.child($routeParams['appId']).child("edit_text_views");
    $scope.existing_edit_text_views = $firebaseArray(myFirebaseRef);
    $scope.edit_text_views = [];
    $scope.add = function () {
      $scope.edit_text_views.push({
      	ui_name: null,
        ui_name_placeholder: "enter name",
        font_size: null,
        font_size_placeholder: "20",
        text: null,
        text_placeholder: "enter text",
        color: null,
        color_placeholder: "#ff99ee",
        font_color: null,
        font_color_placeholder: "#000000",
        height: null,
        height_placeholder: "height",
        width: null,
        width_placeholder: "width",
        input_placeholder: null,
        input_placeholder_placeholder: "Default Placeholder Text"
      });
    } // add function

    $scope.hideIfBlank = function (ui_name) {
     // console.log(ui_name.length)
     if (ui_name.length == 0)
      return true;
    else
      return false;
    }

    $scope.save_item = function(edit_text) {
        if (edit_text.ui_name.length != 0){
            var str = edit_text.ui_name;
            var obj = {}
            obj[edit_text.ui_name] = {
                ui_name: edit_text.ui_name,
                height: edit_text.height,
                width:edit_text.width,
                color:edit_text.color,
                font_color: edit_text.font_color,
                font_size: edit_text.font_size,
                text: edit_text.text,
                input_placeholder: edit_text.input_placeholder
            };
            myFirebaseRef.update(obj);
            $scope.edit_text_views = [];
        }
        
    }

    $scope.colorChange = function(id, hex) {
    	var foo = {};
    	foo[id]=hex;
	    myFirebaseRef.child($scope.current_edit_text.textViewName).update(foo);
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
	          console.log(hex);
	        } catch(e) {}
	        $(this).select();
	      },
	      theme: 'bootstrap'
	    });
  });
});
