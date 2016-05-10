//create module
var parseCode = angular.module('parseCode', ['ngRoute']);

//configure routes
parseCode.config(function($routeProvider) {

		//home
		$routeProvider.when('/contact', {
		templateUrl : 'views/contact.html',
		controller  : 'contactController'
		});

		//me
		$routeProvider.when('/me', {
		templateUrl : 'views/me.html',
		controller  : 'meController'
		});

		//projects
		$routeProvider.when('/projects', {
		templateUrl : 'views/projects.html',
		controller  : 'projectController'
		});

		//thanks
		$routeProvider.when('/thanks', {
		templateUrl : 'views/thanks.html',
		controller  : 'homeController'
		});

		$routeProvider.otherwise({
        redirectTo: '/me'
      });
});

//home controller
parseCode.controller('homeController', ['$scope', function($scope){

}]);

//me controller
parseCode.controller('meController', function($scope){
	$scope.message = "this is the me view";
	$scope.languages = [
	{"skill": "JS","score": 5, "color": "#f8dc3d"},
	{"skill": "HTML","score": 4, "color": "#f06529"},
	{"skill": "CSS","score": 5, "color": "#2daadd"},
	{"skill": "Java","score": 4, "color": "#e0171b"},
	{"skill": "C#","score": 3, "color": "#9a69d5"},
	{"skill": "Python","score": 4, "color": "#00d200"},
	{"skill": "PHP","score": 3, "color": "#617CBE"},
	{"skill": "SQL","score": 3, "color": "#EB9033"},
	];
	$scope.frameworks = [
	{"skill": "AngularJS","score": 4, "color": "#f8dc3d"},
	{"skill": "jQuery","score": 4, "color": "#f8dc3d"},
	{"skill": "Bootstrap","score": 3, "color": "#2daadd"},
	{"skill": "Ionic","score": 4, "color": "#2daadd"},
	];
	$scope.others = [
	{"skill": "OOP Principles", "color": "#e0171b"},
	{"skill": "Agile Development Cycle", "color": "#00d200"},
	{"skill": "UI Design", "color": "#f06529"},
	{"skill": "Git", "color": "#9a69d5"},
	];


	$scope.number = 5;
	$scope.getNumber = function(num) {
    	return new Array(num);   
	}
});

//projects controller
parseCode.controller('projectController', function($scope){
	$scope.message = "this is the projects view";
});