DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(30,2) NOT NULL,
    stock_quantity INT(30) NOT NULL
);

Select * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
    ("phone", "electronics", 199.99, 15),
    ("jeans", "clothing", 39.99, 10),
    ("chips", "groceries", 4.99, 40),
    ("dogfood", "pet supplies", 10.99, 25),
    ("keyboard", "electronics", 59.99, 7),
    ("jacket", "clothing", 29.99, 14),
    ("socks", "clothing", 7.99, 25),
    ("soda", "groceries", 4.99, 45),
    ("television", "electronics", 399.99, 4),
    ("catfood", "pet supplies", 14.99, 18)
