const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'bodam-e.com',
  user: 'ljlj123',
  password: 'Lj!13402413',
  database: 'ljlj123'
});

module.exports = pool.promise();
