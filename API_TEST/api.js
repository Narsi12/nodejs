const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nodejs',
    password: 'root',
    port: 5432
});

// Check if the table exists, if not, create it
async function createTableIfNotExists() {
    try {
        const result = await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                age INT NOT NULL
            )
        `);
        console.log("Table created successfully or already exists.");
    } catch (error) {
        console.error("Error creating table:", error.message);
    }
}

// Function call to create the table if not exists
createTableIfNotExists();

// Create (Insert)
app.post('/users', async (req, res) => {
    const { name, age } = req.body;
    try {
        const result = await pool.query('INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *', [name, age]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding user.' });
    }
});

// Read (Select)
app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
});

// Update
app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const { name, age } = req.body;
    try {
        const result = await pool.query('UPDATE users SET name=$1, age=$2 WHERE id=$3 RETURNING *', [name, age, id]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating user.' });
    }
});

// Delete
app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query('DELETE FROM users WHERE id=$1 RETURNING *', [id]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting user.' });
    }
});

app.listen(4500,()=>{
    console.log("server started port 4500")
})
