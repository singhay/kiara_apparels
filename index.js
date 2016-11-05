var express = require('express'),
    app = express(),
    http = require('http'),
    bodyParser = require('body-parser'),
    server = require('http').Server(app);


// Configure App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/img', express.static('public/img'));
// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.static(__dirname + '/public'));
app.options("*", function(req,res,next) { res.send(200) });


// Routes
app.get('/heartbeat', function(req, res) {
	res.send("OKOKOK");
});

app.use('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});


server.timeout = 0;
server.listen(process.env.PORT || 8080, function() {
  console.log('Listening on port %d', server.address().port);
});
