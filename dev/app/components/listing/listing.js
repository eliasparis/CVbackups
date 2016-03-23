angular
	.module('app.list',['ui.router', 'cvconstant'])
	.controller('ListCtrl',['$state', 'cvs', function($state, cvs) {
	  	this.cvs = cvs;
		this.cvview = function(cv){
			$state.go('cvview', {
				cvtitle: cv,
			});
		};
   }]);