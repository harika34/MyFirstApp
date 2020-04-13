var mysql = require('mysql');

var connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "root",
    database: "UserDetails"

});

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;


function validate() {

    if (username && password) {
		connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
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

}


validate();
