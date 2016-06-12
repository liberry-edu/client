
var yDirectives = angular.module('yDirectives',[]);

yDirectives.directive('renderContent', function () {
    return {
        //restrict to be used this directive only as element('E')
        restrict: 'E',
        //enable to use data from parent scope
        transclude: true,
        //url of html template
        templateUrl: 'directives/yapp-renderContent.html'
    };
});