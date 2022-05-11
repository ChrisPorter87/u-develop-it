const mysql = require("mysql2");
// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: "5055S@msung3",
  database: "election",
});
module.exports = db;
