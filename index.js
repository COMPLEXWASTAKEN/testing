const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 1491;

const dbConfig = {
    host: 's4sog0c4s0cw8k8k08skoo4w',
    user: 'mysql',
    password: 'MQbZAxgaG70lBC5PFTob3j1Lo3CJIymudRk1u51zLaLLt4Y4QwAAWzpbTU26Bb11',
    database: 'default',
    port: 3306
};

const connection = mysql.createConnection(dbConfig);

app.get('/', (req, res) => {
    connection.connect((err) => {
        if (err) {
            console.error('Failed to connect to the database.' + err.stack);
            res.send('Failed to connect to the database.');
        } else {
            res.send('Connected to the database.');
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});