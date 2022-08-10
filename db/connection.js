const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        //Your MySQL passwork
        password: '1@3fp7!ARh',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
