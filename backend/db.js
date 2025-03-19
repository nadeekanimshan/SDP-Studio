const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',    // or your database server IP
  user: 'root',         // your MySQL username
  password: '',         // your MySQL password
  database: 'studio'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Export for use in routes
module.exports = connection;
