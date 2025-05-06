const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Assuming db.js handles the database connection

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to submit data
app.post('/submit', async (req, res) => {
  const { testReportName, serialNumber, property, authors, labUnit, notes } = req.body;

  try {
    await db.query(
      'INSERT INTO reports (test_report_name, serial_number, property, authors, lab_unit, notes) VALUES ($1, $2, $3, $4, $5, $6)',
      [testReportName, serialNumber, property, authors, labUnit, notes]
    );
    res.status(201).send({ message: 'Data saved successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Failed to save data' });
  }
});

// Route to fetch reports data
app.get('/api/reports', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM reports'); // Query the reports table
    res.json(result.rows); // Send the data as JSON
  } catch (err) {
    console.error('Error fetching reports:', err);
    res.status(500).send({ error: 'Error fetching reports data' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});