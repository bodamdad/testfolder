import db from '/lib/db';

const testBoard_id = async (req, res) => {
  const { _id } = req.query;
  try {
    const [rows] = await db.execute('SELECT * FROM testBoard WHERE _id = ?', [_id]);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default testBoard_id;