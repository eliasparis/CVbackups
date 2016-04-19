angular
	.module('app.cvview',['ui.router', 'dbservice'])
    .controller('CvviewCtrl', ['$stateParams', '$scope', 'cvdata', 'removecv', '$state', function($stateParams, $scope, cvdata, removecv, $state) {

		$scope.cvdata = cvdata;
   		$scope.cvtitle = $stateParams.cvtitle;   

   		this.removeCv = function(cvtitle){
   			removecv.removeCv(cvtitle);
   		};
   		
   		this.goHome = function(){
   			$state.go('app');
   		};

    }]);   		





