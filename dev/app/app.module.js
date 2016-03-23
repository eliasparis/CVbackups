angular.module('app', ['ui.router','app.list'])
	   
	   .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	   		$stateProvider.state('app', {
		        url: '/',
		        controller: 'ListCtrl as listCtrl',
		        templateUrl: 'list.tpl.html'
		    });
	   }]);