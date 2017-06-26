// app.js

// BASE SETUP
// ==============================================

var express = require('express');
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var path = require('path');
var data = require('./data');
var users = data.users;

for(let i =0; i < users.length; i++) {
    console.log([i]);
    console.log(users[i].address.city);
    console.log(users[i].address.country);
    console.log('__________________')
}

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/assets',express.static(path.join(__dirname, '/public')));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




app.get('/', function(req,res) {
    res.render('home', { users });
});

app.get('/profilework/:id', function(req,res){
    var ID = req.params.id;
     var user = users[ID - 1];
    res.render('profilework', {user, layout: false});
});

app.get('/profilelook/:id', function(req,res) {
    var ID = req.params.id;
    var user = users[ID - 1];
    res.render('profilelook', {user, layout: false});
    
 
});






// START THE SERVER
// ==============================================

app.listen(8000, function() {
    console.log('Listening on port 3000');
});
