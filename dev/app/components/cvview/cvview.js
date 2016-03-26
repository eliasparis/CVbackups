angular
	.module('app.cvview',['ui.router', 'cvconstant'])
    .controller('CvviewCtrl', ['$stateParams', '$scope', function($stateParams, $scope) {
   		
   		$scope.cvtitle = $stateParams.cvtitle;
    
    }]);