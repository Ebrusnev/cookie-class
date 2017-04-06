var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', function(req, res){
	if(req.cookies.user){
		res.send("Hello, " + req.cookies.user);
	}
	return res.redirect('/signIn')
});

app.get('/signIn', function(req, res){
	res.cookie('user', 'Evgenii');
	res.end();
});

app.get('/signOut', function(req, res){
	res.clearCookie('user');
	res.send('Cookie deleted');
});

app.listen(3030, function() {
	console.log('Server is listenin on port 3030!');
});