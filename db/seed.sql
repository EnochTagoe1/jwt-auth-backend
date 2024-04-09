-- db/seed.sql
\c jwt_auth

INSERT INTO users (username, id, first_name, last_name, location, email, password_hash, created_at, member_since)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW());
('user1', '1000', 'Mike', 'Brown', 'New York, NY', 'mb@email.com', '$2b$10$VKnIRLZSh8QBrEuoZneL6eyzl57gewLQJS.jUv9E7OLlpGxWdwQ0q', NOW(), NOW()),

('carfanatic', '1001', 'John', 'Doe', 'Newark, NJ', 'jdoe@email.com', '$2b$10$VKnIRLZSh8QBrEuoZneL6eyzl57gewLQJS.jUv9E7OLlpGxWdwQ0q', NOW(), NOW()),

('coolride', '1002', 'Jane', 'Doe', 'Atlanta, GA', 'janedoe@email.com', '$2b$10$VKnIRLZSh8QBrEuoZneL6eyzl57gewLQJS.jUv9E7OLlpGxWdwQ0q', NOW(), NOW())

--db seed for cars--

INSERT INTO cars (id, user_id, make, model, make_year, color, cylinders, price, image_path, is_favorite)--img??--
VALUES 
('2jue9377', 1, 'CHEVY', 'CORVETTE', '1957', 'RED', '8CYL','90000','image', 'TRUE')--id*/img-frontend??--

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
--1)demo user credentials/hash 2)npm i dependencies? 3)seed user pasword-hash correct?? 4).env here or front?? 5)user.js-CreateUser edits 6)when db:init db:seed??