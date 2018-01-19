var express = require('express');

var http = require('http');

var path = require('path');

var app = express();

var port = process.env.PORT || 3000; //port can be customized

app.use(express.static(path.join(__dirname, 'public'))); //looks for 
files to serve inside "public" directory, usually in the same location 
as the "server.js" file that contains all these lines of code

//app.set('views', path.resolve(__dirname, 'app/views'));

//app.set('view engine', 'jade');

//app.use('/', require('./app/routes'));

//app.use(function (req, res, next) {

//res.render('404');

//return next();

//});

http.createServer(app).listen(port, function () {

console.log('app running on port ' + port);

});


#From: 
#https://github.com/dexter-juntilla/web-spikes/blob/master/express-basic-server/server.js
#Lines in red are optional, depends on what modules are installed in 
#node install, in this case, if file extensions like ".jade" are used

