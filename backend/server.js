const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
//express, sql, cors


const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    pa 5432,ssword: "",
    database: "contacts"
});

// ^ basic connection setup, parameters of database in XAMPP 

//  v  - Contact addition
app.post('/addContact', (req, res) => {
    const { name, frequency } = req.body;

    const sql = 'INSERT INTO info (name, frequency) VALUES (?, ?)';
    db.query(sql, [name, frequency], (err, result) => {
        if (err) {
            console.error('Error adding contact:', err);
            res.status(500).json({ error: 'Error adding contact' });
        } else {
            res.status(200).json({ message: 'Contact added successfully' });
        }
    });
});



// Add a new route to fetch contacts this should be used to retrieve contacts
app.get('/contacts', (req, res) => {
    const sql = 'SELECT * FROM info';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching contacts:', err);
            res.status(500).json({ error: 'Error fetching contacts' });
        } else {
            res.status(200).json(result);
        }
    });
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});
