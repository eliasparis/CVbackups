angular
	.module('cvconstant',[])
    .constant('cvs', [
       		{
				title: 'sumdddd _camp',
				date: '23/5/12',
				data: 
					{
						name : 'Eli',
						surname : 'Pintos',
						phone: '99999',
						email : 'eee@hotmail.com',
						intro : 'Blaaaaa vsofhsdf sfbdskjg sbdgk sg ksbg ksbg kjfgb skjg bdfkgj dfkg jsdfkgjh kjsdhgdsk ghdkfjg kdfjg dfksjg dkfsjg sdfkjg ssfgfdgg',
						ocupation : 'developah',
					} 
			},
			{
				title: 'summer_camp',
				date: '23/5/12',
				data: 
					{
						name : 'Eli',
						surname : 'Pintos',
						phone: '99999',
						email : 'eee@hotmail.com',
						intro : 'Blaaaaa vsofhsdf sfbdskjg sbdgk sg ksbg ksbg kjfgb skjg bdfkgj dfkg jsdfkgjh kjsdhgdsk ghdkfjg kdfjg dfksjg dkfsjg sdfkjg ssfgfdgg',
						ocupation : 'developah',
					} 
			},
			{
				title: 's0000mer_camp',
				date: '23/5/12',
				data: 
					{
						name : 'Eli',
						surname : 'Pintos',
						phone: '99999',
						email : 'eee@hotmail.com',
						intro : 'Blaaaaa vsofhsdf sfbdskjg sbdgk sg ksbg ksbg kjfgb skjg bdfkgj dfkg jsdfkgjh kjsdhgdsk ghdkfjg kdfjg dfksjg dkfsjg sdfkjg ssfgfdgg',
						ocupation : 'developah',
					} 
			},
			{
				title: 'summer_camp',
				date: '23/5/12',
				data: 
					{
						name : 'Eli',
						surname : 'Pintos',
						phone: '99999',
						email : 'eee@hotmail.com',
						intro : 'Blaaaaa vsofhsdf sfbdskjg sbdgk sg ksbg ksbg kjfgb skjg bdfkgj dfkg jsdfkgjh kjsdhgdsk ghdkfjg kdfjg dfksjg dkfsjg sdfkjg ssfgfdgg',
						ocupation : 'developah',
					} 
			}
    ])
	.factory('cvfactory', ['cvs', function(cvs) {
		this.getCV = function(title){
			
		};
	}]);
		