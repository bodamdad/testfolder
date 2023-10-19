const mysql = require('mysql2/promise');

const connection = await mysql.createConnection({
  host: 'bodam-e.com',
  user: 'ljlj123',
  password: 'Lj!13402413',
  database: 'testdb'
});
