CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    image TEXT NOT NULL,
    rating REAL,
    description TEXT
);


INSERT INTO products (category, name, price, image, rating, description) VALUES
('backpacks', 'Premium Canvas Backpack', '590,000₫', '../static/assets/products/backpacks/backpacks1.jpg', 5, 'premium canvas backpack description'),
('backpacks', 'Mid Backpack', '400,000₫', '../static/assets/products/backpacks/backpacks7.jpg', 5, 'mid backpack description'),
('backpacks', 'Slash Backpack', '530,000₫', '../static/assets/products/backpacks/backpacks5.jpg', 4.5, 'slash backpack description'),
('backpacks', 'Mini Square Backpack', '379,000₫', '../static/assets/products/backpacks/backpacks3.jpg', 5, 'mini square backpack description'),
('wallets', 'Stripe Wallet Card', '190,000₫', '../static/assets/products/wallets/wallets7.jpg', 5, 'stripe wallet card description'),
('wallets', 'Stripe Wallet Mid-Long', '395,000₫', '../static/assets/products/wallets/wallets3.jpg', 4.5, 'stripe wallet mid-long description'),
('wallets', 'Stripe Wallet-Ngang', '395,000₫', '../static/assets/products/wallets/wallets5.jpg', 5, 'stripe wallet-ngang description'),
('wallets', 'Clutch XL Wallet', '400,000₫', '../static/assets/products/wallets/wallets1.jpg', 5, 'clutch XL wallet description'),
('crossbags', 'Bucket Bag', '370,000₫', '../static/assets/products/crossed_bags/crossed_bags1.jpg', 5, 'bucket bag description'),
('crossbags', 'Zip Crossbag', '320,000₫', '../static/assets/products/crossed_bags/crossed_bags7.jpg', 5, 'zip crossbag description'),
('crossbags', 'Daily Flap Bag', '300,000₫', '../static/assets/products/crossed_bags/crossed_bags5.jpg', 5, 'daily flap bag description'),
('crossbags', 'Clutch XL Wallet', '400,000₫', '../static/assets/products/crossed_bags/crossed_bags3.jpg', 5, 'clutch XL wallet description'),
('totes', 'Work Tote-Ngang', '530,000₫', '../static/assets/products/tote_accessories/tote_accessories1.jpg', 4.5, 'work tote-ngang description'),
('totes', 'Work Tote-Dung', '530,000₫', '../static/assets/products/tote_accessories/tote_accessories3.jpg', 5, 'work tote-dung description'),
('totes', 'Mini Tote', '395,000₫', '../static/assets/products/tote_accessories/tote_accessories5.jpg', 4.5, 'mini tote description'),
('totes', 'Premium Canvas Tote', '400,000₫', '../static/assets/products/tote_accessories/tote_accessories7.jpg', 5, 'premium canvas tote description');

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE cart (
        userId INTEGER,
		productId INTEGER,
        quantity INTEGER,
		FOREIGN KEY(userId) REFERENCES users(id),
		FOREIGN KEY(productId) REFERENCES products(id)
		);

DROP TABLE cart;