const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: 'MyPassword',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);

connection.connect(function(err){
    if (err) throw err;
})

module.exports - connection;