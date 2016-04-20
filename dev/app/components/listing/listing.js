angular
	.module('app.list',['ui.router', 'dbservice'])
	.controller('ListCtrl',['$scope', '$state', 'cvlist', function($scope, $state, cvlist) {

	  	cvlist.getCvs().then(function(data){
	  		$scope.cvs = data.reverse();
	  	})

		this.cvview = function(cv){
			$state.go('cvview', {
				cvtitle: cv,
			});
		};
		
    }]);

