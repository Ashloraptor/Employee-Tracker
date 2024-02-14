Use tracker_db

SELECT*
FROM department
JOIN roles ON roles.department_id = department.department_id;

FROM roles
JOIN employee ON employee.role_id = roles.role_id;
