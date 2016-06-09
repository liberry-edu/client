'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('MainCtrl', function($scope, $state) {
    $scope.$state = $state;

    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });
  });

 angular.module('yapp')
  .controller('LearnCtrl', ["$scope", function($scope) {
  	$scope.greeting = "hello";
 	$scope.topBucket = [
 		{"name": "Agriculture",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 9},
		{"name": "Health & Hygiene",
		 "image":"images/agriculture.png",
		 "media_consumed": 2,
		 "media_total" : 7},
		{"name": "Primary Education",
		 "image":"images/agriculture.png",
		 "media_consumed": 4,
		 "media_total" : 6},
		{"name": "Secondary Education",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 5},
		{"name": "Competitive Exam Preparation",
		 "image":"images/agriculture.png",
		 "media_consumed": 5,
		 "media_total" : 5},
		{"name": "Govt. Records and Local Governance Information",
		 "image":"images/agriculture.png",
		 "media_consumed": 7,
		 "media_total" : 9},
		{"name": "Government Scheme Info",
		 "image":"images/agriculture.png",
		 "media_consumed": 2,
		 "media_total" : 4},
		{"name": "Self Defence",
		 "image":"images/agriculture.png",
		 "media_consumed": 5,
		 "media_total" : 6},
		{"name": "English for Job Skills",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 3},
		{"name": "Participatory Information by the Panchayat",
		 "image":"images/agriculture.png",
		 "media_consumed": 7,
		 "media_total" : 9},
		{"name": "Vocational Education",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 9},
		{"name": "Skill training videos",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 8}
 	];
 }]);
