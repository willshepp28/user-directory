var express = require('express');
var mustacheExpress = require('mustache-express');
var path = require('path');
var data = require('./data');
var users = data.users;
console.log(users.name);
console.log(users[0]);
var app = express();

// define the port to run on 
var port = process.env.PORT || 3000; // on our machine obviously 3000 dude
app.use('/assets',express.static(path.join(__dirname, 'views')));


app.engine('mustache', mustacheExpress());


app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


app.get('/', function(req,res) {
    res.render('index', {
            users

    });

});

app.get('/person/:id', function(req,res) {
    res.render('person', {id: req.params.id});
});


app.listen(port, function(){
    console.log('listening on port: ' + port);
});