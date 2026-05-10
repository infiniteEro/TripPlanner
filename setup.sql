CREATE DATABASE IF NOT EXISTS traveloop_db;
USE traveloop_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trips Table
CREATE TABLE IF NOT EXISTS trips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    destination VARCHAR(255) NOT NULL,
    start_date DATE,
    end_date DATE,
    budget_limit DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'Active',
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Itinerary Stops
CREATE TABLE IF NOT EXISTS itinerary (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trip_id INT,
    day_number INT,
    place_name VARCHAR(255),
    description TEXT,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

-- Expenses Table
CREATE TABLE IF NOT EXISTS expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trip_id INT,
    category VARCHAR(100),
    description VARCHAR(255),
    amount_inr DECIMAL(10, 2),
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

-- Initial Seed Data
-- Note: Insert a user first if you want to test relations
INSERT INTO trips (destination, budget_limit) VALUES ('Rajasthan Heritage', 50000.00);
INSERT INTO itinerary (trip_id, day_number, place_name, description) VALUES 
(1, 1, 'Agra - Taj Mahal', 'Sunrise visit to the Taj Mahal and Agra Fort.'),
(1, 2, 'Jaipur - Hawa Mahal', 'Exploring the Pink City and Amber Fort.');
