angular
	.module('app.cvview',['ui.router'])
    .controller('CvviewCtrl', ['$stateParams', '$scope', 'cvdata', function($stateParams, $scope, cvdata) {

		  $scope.date = cvdata.date;
   		$scope.cvtitle = $stateParams.cvtitle;   		
   		    
    }]);