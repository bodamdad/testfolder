import db from '/lib/db';

export default async (req, res) => {
  const { no } = req.query;
  const [rows] = await db.execute('SELECT * FROM testBoard WHERE no = ?', [no]);
  res.status(200).json(rows[0]);
};
