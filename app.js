var express = require('express');
var path = require('path'); 
var app = express();
var http = require('http');

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), function(){
    console.log('Express server');
});


app.get('/newcards', function(req, res) {
	http.get({hostname:'82.146.46.215', port:8000, path:'/apps/competition/'},function(response){
		response.setEncoding('utf8');
	    response.on('data', function(chunk){
	    	getCallback(res, JSON.parse(chunk));
	    });		
	})
});

var getCallback = function(res, chunk){
	var apps = new Array()
		
	iconLeft = chunk.apps[0],
	iconRight = chunk.apps[1];
	iconLeft.side = 'left';
	iconRight.side = 'right';
	apps.push(iconLeft,iconRight)
	chunk.apps = apps;
	res.send(chunk);
}

