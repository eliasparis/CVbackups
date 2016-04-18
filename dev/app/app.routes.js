angular
	.module('app.routes',['ui.router', 'dbservice'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	   	
	   	$stateProvider.state('app', {
	        url: '',
	        controller: 'ListCtrl as listCtrl',
	        templateUrl: 'app/components/listing/listing.tpl.html',
	    });
	   	
	   	$stateProvider.state('cvview', {
	        url: '/cvview/:cvtitle',
	        controller: 'CvviewCtrl as cvviewCtrl',
	        templateUrl: 'app/components/cvview/cvview.tpl.html',
	        params: {
	        	cvtitle: null,
	        },
	        resolve: {
	        	cvdata: ['cvdata', '$stateParams', function(cvdata, $stateParams){
	        		return cvdata.getCv($stateParams.cvtitle);
	        	}],
	        }
	    });
   		
   		$stateProvider.state('cvadd', {
	        url: '/cvadd',
	        controller: 'CvaddCtrl as cvaddCtrl',
	        templateUrl: 'app/components/cvadd/cvadd.tpl.html',
	    });
   		
   		$urlRouterProvider.otherwise('');

   	}]);
