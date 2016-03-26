angular
	.module('app.cvadd',['ui.router'])
	.controller('CvaddCtrl',['$scope', function($scope) {
		$scope.hello = 'here we will add a cv';
	}]);