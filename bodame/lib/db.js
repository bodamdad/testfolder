import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'bodam-e.com',
  user: 'ljlj123',
  password: 'Lj!13402413',
  database: 'bodame'
});

export default pool;


import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '제 홈페이지 도메인',
  user: '계정',
  password: '비번',
  database: '데이터베이스'
});

export default pool;
