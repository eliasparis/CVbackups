angular
	.module('dbservice',['dbconstant', 'firebase'])
	.service('dbservice', ['dburl', '$firebaseObject', '$firebaseArray', function(dburl, $firebaseObject, $firebaseArray){
		
		var dburl = dburl.url;		
		var cvlisting = new Firebase(dburl).child("cvs");

		//console.log($firebaseObject(myDataRef));
		var data = $firebaseArray(cvlisting)
		var list;

		data.$loaded()
			.then(function(data){
				list = data;
				data.forEach(function(obj){
					console.log(obj.$id + ' --- > ' + obj.date);
				});
			})
			.catch(function(error){
				console.log(error);
			});

		return {
			cvlisting: data,
		};

	}]);