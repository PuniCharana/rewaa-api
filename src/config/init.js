const connection = require('./db')

const sqlDb = "CREATE DATABASE IF NOT EXISTS rewaa";
connection.query(sqlDb, function (err, result) {
    if (err) throw err;
    console.log("Database created");
});

const sqlUsers = `CREATE TABLE IF NOT EXISTS users (
        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        email varchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        active BOOLEAN DEFAULT true,
        UNIQUE (email)
    )`;
connection.query(sqlUsers, function (err, result) {
    if (err) throw err;
    console.log("Table users created");

    const newUser = {
        name: "Admin",
        active: true,
        email: "admin@rewaa.com",
        password: "123456"
    }
    connection.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        console.log("created user: ", { id: res.insertId, ...newUser });
    });
});


const sqlProducts = `CREATE TABLE IF NOT EXISTS products (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    thumbnail VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    price int(10) NOT NULL DEFAULT 0,
    stock int(10) NOT NULL DEFAULT 0
)`;
connection.query(sqlProducts, function (err, result) {
if (err) throw err;
console.log("Table products created");
});