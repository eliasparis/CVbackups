angular
	.module('listservice',['dbconstant', 'firebase'])
	.service('listservice', ['dburl', '$firebaseObject', '$firebaseArray', function(dburl, $firebaseObject, $firebaseArray){
		
		var dburl = dburl.url;		
		var cvsFirebase = new Firebase(dburl + "/cvs");
		var cvsdata = $firebaseArray(cvsFirebase)

		return {
			cvlisting: cvsdata,
		};

	}]);