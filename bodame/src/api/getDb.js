import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'bodam-e.com',
    user: 'ljlj123',
    password: 'Lj!13402413',
    database: 'ljlj123'
});

export default async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM g5_write_bodam0001');
        res.status(200).json(rows);
    } catch (error) {
      console.error(error);
        res.status(500).json({ error: error.message });
    }
};