const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//default response for any other request (not found) THIS HAS TO BE AFTER ALL OTHER REQUESTS otherwise it will override them all.
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server runnning on PORT ${PORT}!`)
});