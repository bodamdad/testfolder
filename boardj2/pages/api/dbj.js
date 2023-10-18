import pool from '/db/database2.js';

export default async (req, res) => {
    try {
      const [members] = await pool.query('SELECT * FROM g5_write_bodam0001;');
      res.json(members);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };