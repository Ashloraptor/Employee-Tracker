USE tracker_db;

INSERT INTO department(name)
VALUES('Real World'),
    ('Kitchen'),
    ('Dining Room'),
    ('Family Room'),
    ('Living Room'),
    ('Bathroom'),
    ('Bedroom');

INSERT INTO role(title, salary, department_id)
VALUES('Adult', 3, 1),
    ('Dishwasher', 2, 2),
    ('Other', 0, 1),
    ('KP', 2, 2),
    ('Counter', 2, 2),
    ('Clean Dining Room', 2, 3),
    ('Clean Family Room', 2, 4),
    ('Clean Living Room', 2, 5),
    ('Clean Bathroom', 2, 6),
    ('Clean Bedroom', 1, 7),
    ('Keep diaper clean', 1, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('Jasmine', 'Lowe', 1, 1),
    ('Jaeda', 'Lowe', 1, 1),
    ('James', 'Lowe', 2, 1),
    ('June', 'Lowe', 2, 1),
    ('Jessica', 'Lowe', 3, 1),
    ('Joanna', 'Lowe', 3, 1),
    ('Julia', 'Lowe', 4, 1),
    ('Jenna', 'Lowe', 4, 1),
    ('Jane', 'Lowe', 5, 1),
    ('Juniper', 'Lowe', 6, 1),
    ('Jennifer', 'Lowe', 7, 1),
    ('Johnathan', 'Lowe', 8, 1),
    ('Jaia', 'Lowe', 9, 1),
    ('Juno', 'Lowe', 10, 1),
    ('Jubilee', 'Lowe', 11, 1);
