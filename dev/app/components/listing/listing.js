angular
	.module('app.list',['ui.router', 'dbservice'])
	.controller('ListCtrl',['$scope', '$state','cvlist', function($scope, $state, cvlist) {

	  	this.cvs = cvlist.cvlisting;

		this.cvview = function(cv){
			$state.go('cvview', {
				cvtitle: cv,
			});
		};
		
    }]);

