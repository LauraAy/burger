const { createConnection } = require('mysql2')
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'burger_db'
});
};

connection.connect();
module.exports = connection