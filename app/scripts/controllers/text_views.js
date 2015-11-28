'use strict';

angular.module('dynamoUiApp')
  .controller('TextViewsCtrl', function ($scope, $routeParams) {
    var myFirebaseRef = new Firebase('https://hackwestern.firebaseio.com/');
    myFirebaseRef = myFirebaseRef.child($routeParams['appId']).child("text_views");
    $scope.app_name = $routeParams['appId'];
    $scope.text_views = {};
    $scope.current_text_view = {};
    $scope.text_views = {};

    $scope.save_item = function(text_view) {
      myFirebaseRef.child($scope.current_text_view.textViewName).set(text_view);
    }
    $scope.colorChange = function(hex) {
	    myFirebaseRef.child($scope.current_text_view.textViewName).set({'hex':hex});
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
	          // myFirebaseRef.child($scope.current_text_view.textViewName).set({'hex':hex});
	          $scope.colorChange(hex);
	          console.log(hex);
	        } catch(e) {}
	        $(this).select();
	      },
	      theme: 'bootstrap'
	    });
  });

});

