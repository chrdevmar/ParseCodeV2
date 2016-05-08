//create module
var parseCode = angular.module('parseCode', ['ngRoute']);

//configure routes
parseCode.config(function($routeProvider) {

		//home
		$routeProvider.when('/home', {
		templateUrl : 'views/home.html',
		controller  : 'homeController'
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

		$routeProvider.otherwise({
        redirectTo: '/me'
      });
});

//home controller
parseCode.controller('homeController', ['$scope', function($scope){
	$scope.message = 'this is the home view';
	var birdX = 0;


	// $scope.shootBalls = function(){
		
	// 	var time = Math.floor(Math.random() * 6) + 4;
	// 	var drawbirdAnimation = setInterval(drawBirdWhen, time * 1000)
	// }

	// function drawBird(){
	// 	var canvas = document.getElementById("bg");
	// 	var context = canvas.getContext("2d");
	// 	context.fillStyle = "FF0000";
	// 	context.fillRect(birdX, 20, 5, 5);
	// 	oldBirdX = birdX - 5;
	// 	birdX++;
	// 	if(birdX > window.innerWidth){
	// 		clearInterval(birdAnimation);
	// 	}
	// 	context.clearRect(oldBirdX, 20, 5, 5);
	// }

	// function drawBirdWhen(){
	// 	var birdAnimation = setInterval(drawBird,30)
	// }

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