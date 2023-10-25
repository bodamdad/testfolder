import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'bodam-e.com',
    user: 'ljlj123',
    password: 'Lj!13402413',
    database: 'ljlj123'
});

export default pool;