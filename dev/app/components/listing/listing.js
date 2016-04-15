angular
	.module('app.list',['ui.router', 'cvconstant', 'dbservice', 'firebase'])
	.controller('ListCtrl',['$scope', '$state', 'cvs', 'dbservice', '$firebaseObject', function($scope, $state, cvs, dbservice, $firebaseObject) {

	  	this.cvs = cvs;
		this.cvview = function(cv){
			$state.go('cvview', {
				cvtitle: cv,
			});
		};

   }]);