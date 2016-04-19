angular
	.module('app.cvview',['ui.router'])
    .controller('CvviewCtrl', ['$stateParams', '$scope', 'cvdata', function($stateParams, $scope, cvdata) {

		$scope.cvdata = cvdata;
   		$scope.cvtitle = $stateParams.cvtitle;   		
   		    
    }]);