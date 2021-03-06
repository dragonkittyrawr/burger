// Inside the connection.js file, setup the code to connect Node to MySQL.
var mysql = require("mysql");

var connection;


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

// CONNECTION
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
});

// Export the connection.
module.exports = connection;
