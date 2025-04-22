const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// PostgreSQL connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'CTMO',
    password: 'Nikola123',
    port: 5432,
});

// API endpoint to fetch all sensors
app.get('/sensors', async (req, res) => {
    try {
        const result = await pool.query('SELECT sensor_name FROM Sensors');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Error fetching sensors from the database:', err);
        res.status(500).send('Error fetching sensors from the database');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});