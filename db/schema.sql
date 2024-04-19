-- db/schema.sql
DROP DATABASE IF EXISTS jwt_auth;

CREATE DATABASE jwt_auth;


\c jwt_auth

DROP TABLE IF EXISTS USERS;

CREATE TABLE users (
    username VARCHAR(255) UNIQUE NOT NULL,
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    location VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    member_since TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS CARS; 

CREATE TABLE cars (
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    user_id integer REFERENCES users(id),
    make VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    make_year INTEGER NOT NULL,
    color VARCHAR,
    cylinders  NOT NULL,
    price integer NOT NULL,
    image_path TEXT,
    is_favorite boolean
    --ON DELETE CASCADE--
);

-- DROP TABLE IF EXISTS SHOWS

-- CREATE TABLE shows {
--     id SERIAL PRIMARY KEY
--     show_date DATE
--     location VARCHAR 
--     PRICE integer
--     will_attend boolean
-- }







