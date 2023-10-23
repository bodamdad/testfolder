import pool from '../../db/database.js';

export default async (req, res) => {
    try {
      const [t1] = await pool.query('SELECT * FROM t1;');
      res.json(t1);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };