var express = require('express');
var path = require('path'); 
var app = express();
var http = require('http');

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname))

app.listen(app.get('port'), function(){
    console.log('Express server');
});


