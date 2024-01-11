SELECT * FROM users;

INSERT INTO users (
    first_name, last_name, assets_id, debts_id
) VALUES (
    'test name', 'test name', 1, 1
)

SELECT * FROM assets;

SELECT * FROM bank_accounts;
INSERT INTO bank_accounts (
    name, type, amount, assets_id
) VALUES (
    'test', 'savings', 123.43, 1
)

SELECT * FROM debts;
