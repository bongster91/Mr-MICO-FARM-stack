USE mico_db;

INSERT INTO users (
    first_name, last_name, date_of_birth, address, phone_number, email, password, portfolio_id, admin
) VALUES (
    'Mister', 'Meowgi', '2003-01-02', '123 Beans Lane', '111-111-1111', 'catchmice@fields.com', 'treats123', 1, true
);  

INSERT INTO portfolios (
    assets_id, debts_id
) VALUES (
    1, 1
);

INSERT INTO assets (
    bank_accounts_id, investments_id, properties_id
) VALUES (
    1, 1, 1
);

INSERT INTO debts (
    bills_id, loans_id, credits_id, expenses_id
) VALUES (
    1, 1, 1, 1
);

INSERT INTO bank_accounts (
    name, type, amount, assets_id
) VALUES 
    ('Catnip Collective', 'Checking', 250000.00, 1),
    ('Mice Catchers', 'Checking', 100000.00, 1),
    ('Lick Le Fur', 'Savings', 394000.00, 1),
    ('Lick Le Fur', 'Checking', 50000.00, 1),
    ('Catnip Collective', 'Savings', 20000.00, 1),
    ('Mice Catchers', 'Savings', 25000.00, 1)
;

INSERT INTO properties (
    name, type, amount, assets_id
) VALUES
    ('4 Tier Cat Tree Extravaganza', 'Home', 20000.00, 1),
    ('Paw Pool Raft', 'Vehicle', 5000.00, 1),
    ('Meowgi Portait', 'Inventory', 15000.00, 1),
    ('Wooden Arch Bridge', 'Other', 2000.0, 1)
;

INSERT INTO investments (
    name, type, amount, assets_id
) VALUES
    ('Dogecoin', 'Crypto', 2000.00, 1),
    ('Future Retirement', '401k', 30000.00, 1),
    ('Kitty Korp', 'Stock', 15000.00, 1),
    ('Kitty Bond', 'Bond', 10000.00, 1),
    ('Catnip Collective Fund', 'Mutual Fund', 5000.00, 1),
    ('Diverse Catnip', 'ETF', 9000.00, 1)
;

INSERT INTO bills (
    name, type, amount, debts_id
) VALUES
    ('12-Cat Collect', 'Household', 500.00, 1),
    ('Cats-R-Us', 'Household', 700.00, 1), 
    ('Feline Finder', 'Other', 100.00, 1), 
    ('Netflix', 'Subscription', 100.00, 1),
    ('Kitty Koffee Kollective', 'Subscription', 100.00, 1)
;

INSERT INTO loans (
    name, type, amount, debts_id
) VALUES
    ('American Cat Promotion', 'Personal', 5000.00, 1),
    ('Catmobile', 'Auto', 10000.00, 1), 
    ('EduCated', 'Student', 8000.00, 1), 
    ('5 Tier Cat Tower Complex', 'Mortgage', 7000.00, 1),
    ('Small Business Fund', 'Business', 20000.00, 1)
;

INSERT INTO credits (
    name, type, amount, debts_id
) VALUES
    ('Premium', 'American Express', 20000.00, 1),
    ('Value', 'Discover', 3000.00, 1), 
    ('One Preferred', 'Visa', 5000.00, 1), 
    ('Select', 'Mastercard', 17000.00, 1)
;

INSERT INTO expenses (
    name, type, amount, debts_id
) VALUES
    ('Relaxing Sauna', 'spa day', 500.00, 1),
    ('Starbucks', 'vanilla latte', 10.50, 1), 
    ('Kitty Rolex', 'watch on sale', 12000.00, 1), 
    ('Catnip', 'snacks for the month', 950.00, 1)
;