import pool from '/db/database.js';

export default async (req, res) => {
    try {
      const [board_test01] = await pool.query('SELECT * FROM board_test01;');
      res.json(board_test01);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };