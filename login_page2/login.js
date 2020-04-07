var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'userdetails'
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/auth', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;

  if (username && password) {
    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
      if (results.length > 0) {
        response.send('logged successfully');
        
      } else {
        response.send('Incorrect Username and/or Password!');
        
      }
      response.end();
    });
  } else {
    response.send('Please enter Username and Password!');
    response.end();
  }
});


app.listen(3001);

