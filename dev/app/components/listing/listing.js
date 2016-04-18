angular
	.module('app.list',['ui.router', 'cvconstant', 'listservice'])
	.controller('ListCtrl',['$scope', '$state', 'cvs', 'listservice', function($scope, $state, cvs, listservice) {

	  	this.cvs = listservice.cvlisting;
		this.cvview = function(cv){
			$state.go('cvview', {
				cvtitle: cv,
			});
		};
		
   }]);

