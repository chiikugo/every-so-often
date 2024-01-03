require('dotenv').config();
const express = require("express");
const { Client } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

const db = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect();

// Function to insert a new contact into the database
const addContact = async (name, frequency) => {
    try {
        // Use parameterized query to prevent SQL injection
        const sql = 'INSERT INTO contact (name, frequency) VALUES ($1, $2) RETURNING *';
        const result = await db.query(sql, [name, frequency]);
        return result.rows[0];
    } catch (error) {
        console.error('Error adding contact:', error);
        throw error;
    }
};

// Add a new route to fetch contacts, used to retrieve contacts
app.post('/addContact', async (req, res) => {
    const { name, frequency } = req.body;

    try {
        const newContact = await addContact(name, frequency);

        res.status(200).json({ message: 'Contact added successfully', data: newContact });
    } catch (error) {
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