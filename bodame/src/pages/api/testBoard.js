import db from '/lib/db';

const testBoard = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM testBoard');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default testBoard;