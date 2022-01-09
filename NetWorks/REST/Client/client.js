const request = require('request');

request('http://127.0.0.1:3000',function(error,res,body){
	console.error('',error);
	console.log('',res && res.statusCode);
	console.log('',body);
});


