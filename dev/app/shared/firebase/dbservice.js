angular
	.module('dbservice',['dbconstant', 'firebase', 'ui.router'])
	.service('cvlist', ['dburl', '$firebaseArray', function(dburl, $firebaseArray){
		
		var dburl = dburl.url;		
		var cvsFirebase = new Firebase(dburl + "/cvs");
		var cvsdata = $firebaseArray(cvsFirebase)
		var layoutdata = [];

		cvsdata
			.$loaded()
			.then(function(data){
				
				data.forEach(function(cv){
					layoutdata.push(
						{
							"title" : cv.$id,
							"date" : cv.date
						});
				})

			})
			.catch(function(error){
				console.log(error);
			});

		return {
			cvlisting: layoutdata,
		};

	}])
	.service('cvdata',['dburl', '$firebaseObject', function(dburl, $firebaseObject){

		var dburl = dburl.url;

		this.getCv = function(cvParameter){
			var cvFirebase = new Firebase(dburl + /cvs/ + cvParameter);
			return $firebaseObject(cvFirebase).$loaded();
		}

	}])
	.service('newcv',['dburl', '$firebaseArray', function(dburl, $firebaseArray){
		
		var dburl = dburl.url;
		var cvsFirebase = $firebaseArray(new Firebase(dburl + "/cvs"));
		
		this.addCv = function(cvDataModel){
			
			var rawDate = new Date;
			var date = rawDate.toLocaleDateString();
			var title = cvDataModel.title;
			var timestamp = rawDate.toString();

			cvsFirebase.$add({ title, cvDataModel, date, timestamp });

			console.log("addCv service", cvDataModel);
		};

	}]);
