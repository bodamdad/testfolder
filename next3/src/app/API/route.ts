import pool from '../../utils/db';

export default async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM dddddddddddd');
    connection.release();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send(error);
  }
};