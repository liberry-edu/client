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
 	$scope.topBucket = [
 		{"key": "1232145",
 		 "name": "Agriculture",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 9,
		 "type" : "category"},
		{"key": "12321245",
		 "name": "Health & Hygiene",
		 "image":"images/agriculture.png",
		 "media_consumed": 2,
		 "media_total" : 7,
		 "type" : "category"},
		{"key": "1732145",
		 "name": "Primary Education",
		 "image":"images/agriculture.png",
		 "media_consumed": 4,
		 "media_total" : 6,
		 "type" : "category"},
		{"key": "632145",
		 "name": "Secondary Education",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 5,
		 "type" : "category"},
		{"key": "92145",
		 "name": "Competitive Exam Preparation",
		 "image":"images/agriculture.png",
		 "media_consumed": 5,
		 "media_total" : 5,
		 "type" : "category"},
		{"key": "6145",
		 "name": "Govt. Records & Local Governance Info",
		 "image":"images/agriculture.png",
		 "media_consumed": 7,
		 "media_total" : 9,
		 "type" : "category"},
		{"key": "282145",
		 "name": "Government Scheme Info",
		 "image":"images/agriculture.png",
		 "media_consumed": 2,
		 "media_total" : 4,
		 "type" : "category"},
		{"key": "932145",
		 "name": "Self Defence",
		 "image":"images/agriculture.png",
		 "media_consumed": 5,
		 "media_total" : 6,
		 "type" : "category"},
		{"key": "32",
		 "name": "English for Job Skills",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 3,
		 "type" : "category"},
		{"key": "67",
		 "name": "Participatory Information by Panchayat",
		 "image":"images/agriculture.png",
		 "media_consumed": 7,
		 "media_total" : 9,
		 "type" : "category"},
		{"key": "121",
		 "name": "Vocational Education",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 9,
		 "type" : "category"},
		{"key": "1235",
		 "name": "Skill training videos",
		 "image":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 8,
		 "type" : "category"}
 	];
 }]);

 angular.module('yapp')
  .controller('CategoryCtrl', ["$scope", function($scope) {
 	$scope.category = [
 		{"key": "1232145",
 		 "name": "Video: Meet Rahul ",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 9,
		 "type" : "video"},
		{"key": "12321245",
		 "name": "Rahul meets Tina",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 2,
		 "media_total" : 7,
		 "type" : "doc"},
		{"key": "1732145",
		 "name": "Tina meets Kajal",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 4,
		 "media_total" : 6,
		 "type" : "music"},
		{"key": "632145",
		 "name": "Kajal meets Nimit",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 5,
		 "type" : "game"},
		{"key": "92145",
		 "name": "Nimit meets Ahilya",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 5,
		 "media_total" : 5,
		 "type" : "video"},
		{"key": "6145",
		 "name": "Ahilya meets Suhas",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 7,
		 "media_total" : 9,
		 "type" : "video"},
		{"key": "282145",
		 "name": "Sub Category 1",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 2,
		 "media_total" : 4,
		 "type": "category"},
		{"key": "932145",
		 "name": "Sub Category 2",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 5,
		 "media_total" : 6,
		 "type": "category"},
		{"key": "32",
		 "name": "Sub Category 3",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 3,
		 "type": "category"},
		{"key": "67",
		 "name": "Sub Category 4",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 7,
		 "media_total" : 9,
		 "type": "category"},
		{"key": "121",
		 "name": "Sub Category 5",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 9,
		 "type": "category"},
		{"key": "1235",
		 "name": "Sub Category 6",
		 "imageurl":"images/agriculture.png",
		 "media_consumed": 3,
		 "media_total" : 8,
		 "type": "category"}
 	];
 }]).controller('CategoryIdCtrl',['$scope','$stateParams', function($scope, $stateParams){
         var categoryId = $stateParams.categoryId;
         /*
            We will query server for the object related to this query ID. For now, I am just passing the object as category object.
          */
         $scope.item = $stateParams.categoryObject;
 }]);