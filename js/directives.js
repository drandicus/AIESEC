angular.module('app.directives', [])
.directive('header', function(){
	return {
		restrict: 'E',
		templateUrl: 'partials/header.html'
	};
})