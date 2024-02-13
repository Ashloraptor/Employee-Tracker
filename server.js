const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// //Assignment 11, not sure if it works or is necessary
// //Query database
// db.query('Select * from employees', function (err, results){
//   console.log(results);
// });

//Query database using COUNT() and GROUP BY
db.query('SELECT COUNT(id) AS total_count FROM employee_id GROUP BY role', function (err, results) {
  console.log(results);
});

db.query('SELECT COUNT(id) AS total_count FROM role_id GROUP BY department', function (err, results) {
  console.log(results);
});

db.query('SELECT COUNT(id) AS total_count FROM department_id', function (err, results) {
  console.log(results);
});

//Query database using 

//Default response for any other request (Not Found)
app.use((req, res) =>{
  res.status(404).end();
});

app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
});

//Create 
app.post('/api/new-movie', ({ body }, res) => {
    const sql = `INSERT INTO movies (movie_name)
      VALUES (?)`;
    const params = [body.movie_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });