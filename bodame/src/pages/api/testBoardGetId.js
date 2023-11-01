import db from '/lib/db';

export default async (req, res) => {
  try {
    const { id } = req.query;
    const [rows] = await db.execute('SELECT title, content FROM your_table_name WHERE id = ?', [id]);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
