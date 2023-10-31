import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'bodam-e.com',
  user: 'ljlj123',
  password: 'Lj!13402413',
  database: 'bodame'
});

export default pool;