// const mysql = require('mysql2');
// const inquirer = require('inquirer');
// const Questions = require('./cli');
// new Questions().run();
const connection = require('./connection');

class Database {
    //Keeping reference to connection in class in case we need it
    constructor(connection) {
        this.connection = connection;
    }
}

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

// Begin code (from Sam)

const { prompt } = require("inquirer");
//const logo = require("asciiart-logo");
const db = require("./db");
init();
function init() {

    loadMainPrompts();
}
function loadMainPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: 'View all departments',
                    value: 'VIEW_DEPARTMENTS'
                },
                {
                    name: 'View all roles',
                    value: 'VIEW_ROLES'
                },
                {
                    name: 'View all employees',
                    value: 'VIEW EMPLOYEES'
                },
                {
                    name: 'Add a department',
                    value: 'ADD_DEPARTMENT'
                },
                {
                    name: 'Add a role',
                    value: 'ADD_ROLE'
                },
                {
                    name: 'Add an employee',
                    value: 'ADD_EMPLOYEE'
                },
                {
                    name: 'Update an employee role',
                    value: 'UPDATE_EMPLOYEE_ROLE'
                },
                {
                    name: 'Quit',
                    value: 'QUIT'
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        // Call the appropriate function depending on what the user chose
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            default:
                quit();
        }
    }
    )
} 