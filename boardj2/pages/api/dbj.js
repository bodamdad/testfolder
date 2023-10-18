import pool from '/db/database.js';

export default async (req, res) => {
    try {
      const [members] = await pool.query('SELECT * FROM t1;');
      res.json(members);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };