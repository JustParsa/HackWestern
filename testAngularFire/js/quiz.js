(function(){
	var app = angular.module('AngularFire', []);
	var myFirebaseRef = new Firebase("https://hackwestern.firebaseio.com/");
	// $('#messageInput').keypress(function (e) {
 //    if (e.keyCode == 13) {
 //      var name = $('#nameInput').val();
 //      var text = $('#messageInput').val();
 //      // myFirebaseRef.set('User ' + name + ' says ' + text);
 //      var obj = {abc: "helo"}
 //      myFirebaseRef.set(obj);
 //      $('#messageInput').val('');
 //    }
 //  });
	app.controller('appController', ['$scope','$http','$sce', function($scope, $http, $sce){
		$scope.items = [];
    $scope.add = function () {
      $scope.items.push({ 
        id: "",
        idPlaceholder: "id",
        attr: "",
        attrPlaceholder: "attr",
      });
    } // add function

    $scope.updateAppInfo = function(){
			var appInfo = {};
			appInfo[$scope.appName] = {};
			for (var ind in $scope.items){
				var obj = $scope.items[ind];
				console.log(obj);
				appInfo[$scope.appName][obj.id] = obj.attr;
			}
			// appInfo[$scope.appName].push($scope.items);
			// var appInfo = {$scope.appName: true}
			myFirebaseRef.set(appInfo);
		}
		// $http.get('quiz_data.json')
		// 		.then(function(quizData){
		// 			$scope.myQuestions = quizData.data;
		// 			$scope.totalQuestions = $scope.myQuestions.length;
		// 		});

		// $scope.selectAnswer = function(qIndex, aIndex){
		// 	// console.log(qIndex + ' ' + aIndex);
		// 	var questionState = $scope.myQuestions[qIndex].questionState;
		// 	if(questionState != 'answered'){
		// 		$scope.myQuestions[qIndex].selectedAnswer=aIndex;
		// 		var correctAnswer = $scope.myQuestions[qIndex].correct;
		// 		$scope.myQuestions[qIndex].correctAnswer = correctAnswer;

		// 		if (aIndex === correctAnswer) {
		// 			$scope.myQuestions[qIndex].correctness = 'correct';
		// 			$scope.score += 1;
		// 		}
		// 		else{
		// 			$scope.myQuestions[qIndex].correctness = 'incorrect';
		// 		}
		// 		$scope.myQuestions[qIndex].questionState = 'answered';
		// 	}

		// 	$scope.percentage = (($scope.score / $scope.totalQuestions)*100).toFixed(2);
		// }

		// $scope.isSelected = function(qIndex, aIndex){
		// 	return $scope.myQuestions[qIndex].selectedAnswer === aIndex;
		// }

		// $scope.isCorrect = function(qIndex, aIndex){
		// 	return $scope.myQuestions[qIndex].correctAnswer === aIndex;
		// }

		// $scope.selectContinue = function(){
		// 	return $scope.activeQuestion += 1;
		// }

	}]);//end controller

})();