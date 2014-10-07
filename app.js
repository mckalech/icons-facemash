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



var getRandomIconIndex=function(){
  return Math.floor(Math.random() * (icons.length));
}

app.get('/newcards', function(req, res) {
	var iconSet = new Array(),
	iconLeft, 
	iconRight,
	indexLeft,
	indexRight;
	indexLeft = getRandomIconIndex();
	do{
		indexRight = getRandomIconIndex();
		
	}while(indexLeft===indexRight);
	iconLeft = icons[indexLeft];
	iconLeft.side = 'left';
	iconRight = icons[indexRight];
	iconRight.side = 'right';
	iconSet.push(iconLeft,iconRight);

	res.send(iconSet);
});

