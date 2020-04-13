var mysql = require('mysql');

var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "root",
    database: "UserDetails"

});

function getResults(){
con.query("SELECT * FROM Users", function (err, result) {

    console.log(result);
    return result;
});

};

function validate() {

    var userDetails =  getResults();
    console.log(userDetails);

     let username = document.getElementById("username").value;
     let password = document.getElementById("password").value;

    var isExists = false;

        if (username == userDetails[i].username && password == userDetails[i].password) {
            isExists = true;
        }


    }

    if (isExists) {
        alert("logged successfully");
        console.log('logged successfyully');
    }
    else {
        alert("username or password is incorrect");
        console.log('username or password is incorrect');
    }



validate();
