angular
	.module('app.cvview',['ui.router'])
    .controller('CvviewCtrl', ['$stateParams', '$scope', function($stateParams, $scope) {
   		$scope.cvtitle = $stateParams.cvtitle;
   		console.log($stateParams.cvtitle);

    }]);