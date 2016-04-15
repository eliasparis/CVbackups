angular
	.module('dbservice',['dbconstant', 'firebase'])
	.service('dbservice', ['dburl', '$firebaseObject', function(dburl, $firebaseObject){
		
		var dburl = dburl.url;		
		var myDataRef = new Firebase(dburl);

		console.log($firebaseObject(myDataRef));
		return myDataRef;

	}]);