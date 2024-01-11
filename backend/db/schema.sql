DROP DATABASE IF EXISTS mico_db;
CREATE DATABASE mico_db;
USE mico_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    -- date_of_birth VARCHAR(10),
    -- address TEXT,
    -- phone_number VARCHAR(20),
    -- email VARCHAR(50) UNIQUE,
    -- password VARCHAR(50),
    -- admin BOOLEAN DEFAULT false,
    assets_id INT,
    FOREIGN KEY (assets_id) REFERENCES assets(assets_id) ON DELETE CASCADE,
    debts_id INT,
    FOREIGN KEY (debts_id) REFERENCES debts(debts_id) ON DELETE CASCADE
);

CREATE TABLE assets (
    assets_id INT AUTO_INCREMENT PRIMARY KEY,
    bank_accounts_id INT,
    FOREIGN KEY (bank_accounts_id) REFERENCES bank_accounts(bank_accounts_id) ON DELETE CASCADE,
    investments_id INT,
    FOREIGN KEY (investments_id) REFERENCES investments(investments_id) ON DELETE CASCADE,
    properties_id INT,
    FOREIGN KEY (properties_id) REFERENCES properties(properties_id) ON DELETE CASCADE
)

CREATE TABLE debts (
    debts_id INT AUTO_INCREMENT PRIMARY KEY,
    bills_id INT,
    FOREIGN KEY (bills_id) REFERENCES bills(bills_id) ON DELETE CASCADE,
    loans_id INT,
    FOREIGN KEY (loans_id) REFERENCES loans(loans_id) ON DELETE CASCADE,
    credits_id INT,
    FOREIGN KEY (credits_id) REFERENCES credits(credits_id) ON DELETE CASCADE,
    expenses_id INT,
    FOREIGN KEY (expenses_id) REFERENCES expenses(expenses_id) ON DELETE CASCADE
)

CREATE TABLE bank_accounts (
    bank_accounts_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount FLOAT,
    assets_id INTEGER REFERENCES assets(assets_id) ON DELETE CASCADE
)

CREATE TABLE investments (
    investments_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount FLOAT,
    assets_id INTEGER REFERENCES assets(assets_id) ON DELETE CASCADE
)

CREATE TABLE properties (
    properties_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount FLOAT,
    assets_id INTEGER REFERENCES assets(assets_id) ON DELETE CASCADE
)

CREATE TABLE bills (
    bills_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount FLOAT,
    debts_id INTEGER REFERENCES debts(debts_id) ON DELETE CASCADE
)

CREATE TABLE loans (
    loans_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount FLOAT,
    debts_id INTEGER REFERENCES debts(debts_id) ON DELETE CASCADE
)

CREATE TABLE credits (
    credits_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount FLOAT,
    debts_id INTEGER REFERENCES debts(debts_id) ON DELETE CASCADE
)

CREATE TABLE expenses (
    expenses_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount FLOAT,
    debts_id INTEGER REFERENCES debts(debts_id) ON DELETE CASCADE
)