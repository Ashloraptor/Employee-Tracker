const connection = require('./connection');
const { prompt } = require("inquirer");
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
                    value: 'VIEW_EMPLOYEES'
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
                    value: 'UPDATE_EMPLOYEE'
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
            case 'VIEW_DEPARTMENTS':
                viewDepartments();
                break;
            case 'VIEW_ROLES':
                viewRoles();
                break;
            case 'VIEW_EMPLOYEES':
                viewEmployees();
                break;
            case 'ADD_DEPARTMENT':
                addDepartment();
                break;
            case 'ADD_ROLE':
                addRole();
                break;
            case 'ADD_EMPLOYEE':
                addEmployee();
                break;
            case 'UPDATE_EMPLOYEE':
                updateEmployee();
                break;

            default:
                quit();
        }
    }
    )
}

// 'View all departments'

// 'View all roles'

// 'View all employees'
function viewEmployees() {
    db.findAllEmployees()
    .then(([rows])=>{
        let employees = rows;
        console.log('\n');
        console.table(employees);
    })
    .then(() => loadMainPrompts());
}

// //View all employees within a department
// function viewEmployeesByDeptartment() {
//     db.findAllDepartments()
//     .then(([rows])=>{
//         let department = rows;
//         const departmentNames = department.map(({id, name})=> ({
//             name: name,
//             value: id
//         }));

//         prompt([
//             {
//                 type: 'list',
//                 name: 'departmentId',
//                 message: 'Which department would you like to see employees for?',
//                 choices: departmentNames
//             }
//         ])
//         .then(res => db.findAllEmployeesByDepartment(res.departmentId))
//         .then(([rows])=> {
//             let employees = rows;
//             console.log('\n');
//             console.table(employees);
//         })
//         .then(() => loadMainPrompts())
//     });
// }

// 'Add a department'
// 'Add a role'
// 'Add an employee'
// 'Update an employee role'
//'Quit'
function quit(){
    console.log('Thank you for using Employee-Tracker!')
    return;
};