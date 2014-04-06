var app = angular.module('app', ['app.controllers', 'app.directives']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/main.html',
		controller: 'MainCtrl'
	}).when('/business', {
		templateUrl: 'partials/business.html',
		controller: function(){

		}
	}).when('/abroad', {
		templateUrl: 'partials/abroad.html',
		controller: function() {

		}
	}).when('/recruitment', {
		templateUrl: 'partials/recruitment.html',
		controller: function() {

		}
	}).when('/members', {
		templateUrl: 'partials/members.html',
		controller: 'MembersCtrl'
	}).when('/about', {
		templateUrl: 'partials/about.html',
		controller: function() {

		}
	}).when('/services', {
		templateUrl: 'partials/services.html'
	}).otherwise({redirectTo: '/'});
	
	//$locationProvider.html5Mode(true);
	
}]);