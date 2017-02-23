var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var session = require('express-session');
var port = 8000;
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


app.use(express.static(path.join(__dirname + '/client')));
app.use(bp.json());

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(port, function(){
  console.log('running server');
});
