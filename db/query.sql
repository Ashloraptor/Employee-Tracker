SELECT *
FROM department;

SELECT department, COUNT(id) AS number_roles
FROM role
GROUP BY department;

SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM role
GROUP BY department;

--no confidence that this is right--