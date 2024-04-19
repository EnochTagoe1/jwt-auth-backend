-- db/seed.sql
\c jwt_auth

INSERT INTO users (username, first_name, last_name, location, email, password_hash, created_at, member_since)
VALUES 
('demo', 'demoname','demosurname','location', 'demo@example.com', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK' , NOW(), NOW()),
('user1', 'Mike', 'Brown', 'New York, NY', 'mb@email.com', '$2b$10$EQOh0A8e5uMHa2.hxKkX/uqxarmRtoQa/Iz1v2k/gALCL5nHdzgHa', NOW(), NOW()),

('carfanatic', 'John', 'Doe', 'Newark, NJ', 'jdoe@email.com', '$2b$10$YCJI9MnFMPl.dcYCV3EMT.ZpcKcWJ7CanpAG1B2n4.Wwxz3CK4Vfi', NOW(), NOW()),

('coolride', 'Jane', 'Doe', 'Atlanta, GA', 'janedoe@email.com', '$2b$10$VKnIRLZSh8QBrEuoZneL6eyzl57gewLQJS.jUv9E7OLlpGxWdwQ0q', NOW(), NOW());

--db seed for cars--

INSERT INTO cars (user_id, make, model, make_year, color, cylinders, price, image_path, is_favorite)
VALUES 

(1, 'CHEVY', 'CORVETTE', '1957', 'RED', '8CYL','90000','imageurl', TRUE),
(2, 'BENZ', 'MAYBACH', '1987', 'SILVER', '12CYL','120000','imageurl', FALSE),
(3, 'FORD', 'MUSTANG', '1970', 'BLUE', '8CYL','75000','imageurl', TRUE),
(4, 'VW', 'BEETLE', '1973', 'GOLD', '4CYL','80000','imageurl', FALSE);



--seed for shows--
-- INSERT INTO shows (id, show_date, location, PRICE, will_attend)
-- VALUES
-- ('8087', '2024-04-28', 'Javits Center-New York, NY', '35', 'true')--javts?-- 
-- ('2448', '2024-06-22', 'Richmond, VA', '$25', 'false')--$

-- CREATE TABLE shows {
--     id SERIAL PRIMARY KEY
--     show_date DATE
--     location VARCHAR 
--     PRICE integer
--     will_attend boolean
-- }
