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
				
				data
					.sort(function(a, b){
						var a = new Date(a.timestamp);
						var b = new Date(b.timestamp);
						return a>b ? -1 : a<b ? 1 : 0 ;
					})
					.forEach(function(cv){
						layoutdata.push(
							{
								"title" : cv.title,
								"date" : cv.date, 
								"id": cv.$id,
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
	.service('newcv',['dburl', '$firebaseArray', '$state', function(dburl, $firebaseArray, $state){
		
		var dburl = dburl.url;
		var cvsFirebase = new Firebase(dburl + "/cvs");
		
		this.addCv = function(cvDataModel){
			
			var rawDate = new Date;
			var date = rawDate.toLocaleDateString();
			var title = cvDataModel.title;
			var timestamp = rawDate.toString();
			
			//Callback when CV is saved
			var completed = function(error){
				if (error){
					console.log('Error happened');
				}else{
					$state.go('cvview', {
						cvtitle: cvDataModel.title,
					});
				};
			};

			cvsFirebase
				.child(title)
				.set({ title, cvDataModel, date, timestamp }, completed);
		};

	}])
	.service('removecv',['dburl', '$firebaseObject', '$state', function(dburl, $firebaseObject, $state){
		
		var dburl = dburl.url;

		this.removeCv = function(cv){
			
			var cvFirebaseToRemove = $firebaseObject(new Firebase(dburl + /cvs/ + cv));
			
			cvFirebaseToRemove
				.$remove()
				.then(function(){
					$state.go('app');
				})
				.catch(function(error){
					console.log(error);
				});
		};

	}]);
