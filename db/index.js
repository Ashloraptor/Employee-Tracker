const connection = require('./connection');

//begin section from W3 schools https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
var mysql = require('mysql2');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyPassword",
  database: "tracker_db"
});
//end section

class DB {
  // Keeping a reference to the connection on the class in case we need it later
  constructor(connection) {
    this.connection = connection;
  }
  // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
  findAllEmployees() 
   {
  //   return this.connection.promise().query(
  //     "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
  //   );
  // }

  connection.query( 'SELECT * FROM employee', ( err, rows ) => {
    console.log(rows);
    // do something with the results here
} );
};
  





  // Find all employees except the given employee id
  findAllPossibleManagers(employeeId) {
    return this.connection.promise().query(
      'SELECT id, first_name, last_name FROM employee WHERE id != ?',
      employeeId
    );
  }
  // Create a new employee
  createEmployee(employee) {
    return this.connection.promise().query('INSERT INTO employee SET ?', employee);
  }
  // Remove an employee with the given id
  removeEmployee(employeeId) {
    return this.connection.promise().query(
      'DELETE FROM employee WHERE id = ?',
      employeeId
    );
  }

  //Update the given employee's role
  updateEmployeeRole(employeeId, roleId) {
    return this.connection.promise().query(
        'UPDATE employee SET role_id = ? WHERE id = ?',
        [roleId, employeeId]
    );
  }

  //Update the given employee's manager
  updateEmployeeManager(employeeId, managerId) {
    return this.connection.promise().query(
        'UPDATE employee SET manager_id = ? WHERE id = ?',
        [managerId, employeeId]
    );
  }

  //Find all roles, join with departments to display the department name
  findAllRoles() {
    return this.connection.promise().query(
        'SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;'
    );
  }

    // Create a new role
    createRole(role) {
      return this.connection.promise().query('INSERT INTO role SET ?', role);
    }

    //Find all departments
    findAllDepartments() {
      return this.connection.promise().query(
          'SELECT department.id, department.name AS department'
      );
    }

    // Create a new department
    createDepartment(department) {
      return this.connection.promise().query('INSERT INTO department SET ?', department);
    }

    // //Do I need this?
    // createNewDepartment(department){

    // }
  
}
module.exports = new DB(connection);
