const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});