import db from '/lib/db';

const getDb = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM ttest');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getDb;