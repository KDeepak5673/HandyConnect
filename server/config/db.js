const mysql = require('mysql2');

const connectDB = () => {
  const connection = mysql.createConnection({
    host: process.env.RDS_HOST,     // RDS host (endpoint)
    user: process.env.RDS_USER,     // RDS username
    password: process.env.RDS_PASSWORD, // RDS password
    database: process.env.RDS_DB,   // Database name
  });

  connection.connect((err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);  // Exit the process if connection fails
    } else {
      console.log(`RDS MySQL connected: ${connection.config.host}`);
    }
  });

  return connection;  // Returning the connection object if needed
};

module.exports = connectDB;
