const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const connection = require('./db'); // Import your database connection

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const users = [
  {
    username: 'admin',
    password: 'password123' // In a real application, passwords should be hashed
  }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Example route to get students from the database
app.get('/students', (req, res) => {
  connection.query('SELECT * FROM student', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

// Student sign-up route
app.post('/api/student', (req, res) => { // Updated route to match the URL
  const { username, password } = req.body;

  // Insert the new student into the database
  const query = 'INSERT INTO student (username, password) VALUES (?, ?)';
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Student registered successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});