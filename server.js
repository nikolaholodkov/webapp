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

// API endpoint to add a sensor
app.post('/add-sensor', async (req, res) => {
    const { sensorName } = req.body;

    if (!sensorName) {
        return res.status(400).send('Sensor name is required');
    }

    try {
        const result = await pool.query(
            'INSERT INTO Sensors (sensor_name) VALUES ($1) RETURNING *',
            [sensorName]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding sensor to the database');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});