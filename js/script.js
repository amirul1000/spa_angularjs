    // create the module and name it spaApp
    // also include ngRoute for all our routing needs //
    var spaApp = angular.module('spaApp', ['ngRoute']);

    // configure our routes
    spaApp.config(function($routeProvider) {
              $routeProvider
              // route for the home page
              .when('/', {
                  templateUrl : 'home.html',
                  controller  : 'mainController'
              })
			  .when('/about', {
                  templateUrl : 'about.html',
                  controller  : 'aboutController'
              })
			   .when('/contact', {
                  templateUrl : 'contact.html',
                  controller  : 'contactController'
              })
    });



// create the controller and inject Angular's $scope
spaApp.controller('mainController', function($scope,$routeParams){
	    
	});
// create the controller and inject Angular's $scope
spaApp.controller('aboutController', function($scope,$routeParams){
	    $scope.first_name = "Jon";
		$scope.last_name = "Smith";
		$scope.changeName = function(){
			$scope.first_name = "New Jon";
		    $scope.last_name = "Mew Smith";
		}
	});
spaApp.controller('contactController', function($scope,$routeParams){
	    
	});	
	
	

