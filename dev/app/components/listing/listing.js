angular
	.module('app.list',['ui.router', 'dbservice'])
	.controller('ListCtrl',['$scope', '$state', 'cvs', function($scope, $state, cvs) {

		var layoutdata = [];

		cvs
			.reverse()
			.forEach(function(data){
				layoutdata.push({
					title: data.title,
					date: data.date
				});
			});

	  	$scope.cvs = layoutdata;

		this.cvview = function(cv){
			$state.go('cvview', {
				cvtitle: cv,
			});
		};
		
    }]);

