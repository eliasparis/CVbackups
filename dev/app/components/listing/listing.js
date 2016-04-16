angular
	.module('app.list',['ui.router', 'cvconstant', 'dbservice'])
	.controller('ListCtrl',['$scope', '$state', 'cvs', 'dbservice', function($scope, $state, cvs, dbservice) {

	  	this.cvs = cvs;
		this.cvview = function(cv){
			$state.go('cvview', {
				cvtitle: cv,
			});
		};

		console.log(dbservice.list);
		//this.cvlist = dbservice;

   }]);