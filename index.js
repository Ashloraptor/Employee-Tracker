const mysql = require('mysql2');
const inquirer = require('inquirer');
const Questions = require('./cli');
new Questions().run();

// Connect to database
const db = mysql.createConnection(
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
