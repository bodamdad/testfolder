import pool from '/lib/db.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const [rows] = await pool.execute('SELECT _id FROM testBoard');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
