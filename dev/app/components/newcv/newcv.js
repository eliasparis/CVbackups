angular
	.module('app.newcv',['ui.router', 'ngMessages', 'firebase', 'dbservice'])
	.controller('NewcvCtrl',['$scope', 'newcv', function($scope, newcv) {

		$scope.hello = 'here we will add a cv';
		
		this.saveCV = function(cvDataModel){
			newcv.addCv(cvDataModel);
		};

	}]);