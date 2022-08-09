const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

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

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//              VALUES (?,?,?,?)`;
// const params = [1, 'Sharon', 'Marsh', 1];

// db.query(sql, params, (err, result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//default response for any other request (not found) THIS HAS TO BE AFTER ALL OTHER REQUESTS otherwise it will override them all.
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server runnning on PORT ${PORT}!`)
});