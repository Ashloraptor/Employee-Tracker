Use tracker_db

SELECT*
FROM department
JOIN roles ON department_id.roles = department_id.department;

FROM roles
JOIN employee ON role_id.employee = role_id.roles;
