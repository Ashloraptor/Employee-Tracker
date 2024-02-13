const mysql = require('mysql2');
const inquirer = require('inquirer');

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


class Questions {
    run() {
        return inquirer.createPromptModule([{
            name: 'options',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
            ]
        }])
            .then((answer) => {
                //run the corresponding query functions
            })
            //is there a way to repeat the program until it is done?
            .then(() => {
                console.log('Thank you for using Employee-Tracker!')
            })
    };
}

module.exports = Questions

