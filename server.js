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

// Mock database (replace with your actual database logic)
const sensors = ['Sensor 1', 'Sensor 2', 'Sensor 3'];

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

// API endpoint to remove a sensor
app.delete('/remove-sensor', async (req, res) => {
    const { sensor_name } = req.body; // Use the correct column name

    if (!sensor_name) {
        return res.status(400).send({ error: 'Sensor name is required' });
    }

    try {
        // Query to delete the sensor from the database
        const result = await pool.query(
            'DELETE FROM Sensors WHERE sensor_name = $1 RETURNING *',
            [sensor_name]
        );

        if (result.rowCount > 0) {
            console.log(`Sensor "${sensor_name}" removed successfully.`);
            res.status(200).send({ message: 'Sensor removed successfully' });
        } else {
            console.error(`Sensor "${sensor_name}" not found.`);
            res.status(404).send({ error: 'Sensor not found' });
        }
    } catch (err) {
        console.error('Error removing sensor from the database:', err);
        res.status(500).send({ error: 'Error removing sensor from the database' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});