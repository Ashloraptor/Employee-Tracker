USE tracker_db;

INSERT INTO department(name)
VALUES('Real World'),
    ('Kitchen'),
    ('Dining Room'),
    ('Family Room'),
    ('Living Room'),
    ('Bathroom'),
    ('Bedroom'),
    ('Home');

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
    ('Keep diaper clean', 1, 6),
    ('Raise children', 4, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('Jasmine', 'Lowe', 1, 19),
    ('Jaeda', 'Lowe', 1, 19),
    ('James', 'Lowe', 2, 19),
    ('June', 'Lowe', 2, 19),
    ('Jessica', 'Lowe', 3, 19),
    ('Joanna', 'Lowe', 3, 18),
    ('Julia', 'Lowe', 4, 18),
    ('Jenna', 'Lowe', 4, 18),
    ('Jane', 'Lowe', 5, 18),
    ('Juniper', 'Lowe', 6, 16),
    ('Jennifer', 'Lowe', 7, 18),
    ('Johnathan', 'Lowe', 8, 17),
    ('Jaia', 'Lowe', 9, 18),
    ('Juno', 'Lowe', 10, 16),
    ('Jubilee', 'Lowe', 11, 17),
    ('Ashley', 'Lowe', 1, 19),
    ('Audrie', 'Lowe', 1, 19),
    ('Elizabeth', 'Lowe', 1, 19),
    ('Dwight', 'Lowe', 1, 19);
