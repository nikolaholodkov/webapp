const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const pool = new Pool({
  user: 'postgres', // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'CTMO', // Replace with your database name
  password: 'Nikola123', // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

app.use(cors());

// API endpoint to fetch reports
app.get('/api/reports', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reports'); // Query the reports table
    res.json(result.rows); // Send the data as JSON
  } catch (err) {
    console.error('Error fetching reports:', err);
    res.status(500).send('Error fetching reports data');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});