-- Query 1 INSERT
INSERT INTO account (
        account_firstname,
        account_lastname,
        account_email,
        account_password
    )
VALUES (
        'Tony',
        'Stark',
        'tony@starkent.com',
        'Iam1ronM@n'
    );
-- Query 2 UPDATE
UPDATE account
SET account_type = 'Admin'
WHERE account_firstname = 'Tony'
    AND account_lastname = 'Stark';
-- Query 3 DELETE
DELETE FROM account
WHERE account_firstname = 'Tony'
    AND account_lastname = 'Stark';
-- Query 4 UPDATE 
UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small', 'huge')
WHERE inv_make = 'GM'
    AND inv_model = 'Hummer';
-- Query 5 JOIN
SELECT inv_make,
    inv_model,
    classification_name
FROM inventory i
    JOIN classification cl ON cl.classification_id = i.classification_id
WHERE cl.classification_name = 'Sport';
-- Query 6 UPDATE
UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images', 'images/vehicles'),
    inv_thumbnail = REPLACE(inv_image, '/images', 'images/vehicles');