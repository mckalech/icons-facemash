var express = require('express');
var path = require('path'); 
var app = express();
var http = require('http');
var icons = [
	{
		url: '/content/icons/1.jpg',
		name: 'Name1'
	},
	{
    	url: '/content/icons/2.jpg',
    	name: 'Name2'
	},
	{
		url: '/content/icons/3.jpg',
		name: 'Name3'
	},
	{
    	url: '/content/icons/4.jpg',
    	name: 'Name4'
	}
];
app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

app.listen(3000, function(){
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

