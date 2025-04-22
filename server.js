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

// API endpoint to add a new sensor
app.post('/sensors', async (req, res) => {
    const { sensor_name } = req.body;

    if (!sensor_name) {
        return res.status(400).send('Sensor name is required');
    }

    try {
        await pool.query('INSERT INTO Sensors (sensor_name) VALUES ($1)', [sensor_name]);
        res.status(201).send('Sensor added successfully');
    } catch (err) {
        console.error('Error adding sensor to the database:', err);
        res.status(500).send('Error adding sensor to the database');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});