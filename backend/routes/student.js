const express = require('express');
const connection = require('./db'); // Import your database connection
const app = express();

app.get('/student', (req, res) => {
  connection.query('SELECT * FROM student', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
