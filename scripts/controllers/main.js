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
 		{"key": "1232145",
 		 "name": "Agriculture",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 9},
		{"key": "12321245",
		 "name": "Health & Hygiene",
		 "image":"images/agriculture.png",
		 "media_consumed": 2,
		 "media_total" : 7},
		{"key": "1732145",
		 "name": "Primary Education",
		 "image":"images/agriculture.png",
		 "media_consumed": 4,
		 "media_total" : 6},
		{"key": "632145",
		 "name": "Secondary Education",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 5},
		{"key": "92145",
		 "name": "Competitive Exam Preparation",
		 "image":"images/agriculture.png",
		 "media_consumed": 5,
		 "media_total" : 5},
		{"key": "6145",
		 "name": "Govt. Records & Local Governance Info",
		 "image":"images/agriculture.png",
		 "media_consumed": 7,
		 "media_total" : 9},
		{"key": "282145",
		 "name": "Government Scheme Info",
		 "image":"images/agriculture.png",
		 "media_consumed": 2,
		 "media_total" : 4},
		{"key": "932145",
		 "name": "Self Defence",
		 "image":"images/agriculture.png",
		 "media_consumed": 5,
		 "media_total" : 6},
		{"key": "32",
		 "name": "English for Job Skills",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 3},
		{"key": "67",
		 "name": "Participatory Information by Panchayat",
		 "image":"images/agriculture.png",
		 "media_consumed": 7,
		 "media_total" : 9},
		{"key": "121",
		 "name": "Vocational Education",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 9},
		{"key": "1235",
		 "name": "Skill training videos",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 8}
 	];
 }]);
