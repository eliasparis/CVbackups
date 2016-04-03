angular
	.module('app.cvadd',['ui.router', 'ngMessages'])
	.controller('CvaddCtrl',['$scope', function($scope, $event) {
		$scope.hello = 'here we will add a cv';
		
		this.onSubmit = function(){
			
		};
	}]);