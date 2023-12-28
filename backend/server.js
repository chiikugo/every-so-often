const express = require("express");
const { Client } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

const db = new Client({
    host: "localhost",
    user: "chikuokechukwu",
    port: 5432,
    password: "totodile89",
    database: "contacts"
});

db.connect();

// Add a new route to fetch contacts, used to retrieve contacts
app.post('/addContact', async (req, res) => {
    const { name, frequency } = req.body;

    try {
        // Use parameterized query to prevent SQL injection
        const sql = 'INSERT INTO contact (name, frequency) VALUES ($1, $2) RETURNING *';
        const result = await db.query(sql, [name, frequency]);

        res.status(200).json({ message: 'Contact added successfully', data: result.rows[0] });
    } catch (error) {
        console.error('Error adding contact:', error);
        res.status(500).json({ error: 'Error adding contact' });
    }
});

// Add a new route to fetch contacts
app.get('/contacts', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM contact');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ error: 'Error fetching contacts' });
    }
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
