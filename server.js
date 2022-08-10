const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//use API routes
app.use('/api', apiRoutes);

//default response for any other request (not found) THIS HAS TO BE AFTER ALL OTHER REQUESTS otherwise it will override them all.
app.use((req, res) => {
    res.status(404).end();
});

// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}!`);
    });
});


// app.listen(PORT, () => {
//     console.log(`Server runnning on PORT ${PORT}!`)
// });