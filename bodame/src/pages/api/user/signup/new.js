import db from '/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, pw, email, phone, name } = req.body;
    try {
      await db.execute('INSERT INTO user (id, pw, email, phone, name) VALUES (?, ?, ?, ?, ?)', [id, pw, email, phone, name]);
      res.redirect(302, '/user/info')
    } catch (error) {
      res.status(500).json({ error: error.message });
      
    }
  }
}
