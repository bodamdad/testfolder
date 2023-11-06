import db from '/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { no, title, content } = req.body;  
  try {
      await db.execute('UPDATE testBoard SET title = ?, content = ? WHERE no = ?', [title, content, no]);  
      res.redirect(302, '/list')
    } catch (error) {
      res.status(500).json({ error: error.message });
      
    }
  }
}
