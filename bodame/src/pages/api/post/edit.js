import db from '/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { _id, title, content } = req.body;  
    try {
        await db.execute('UPDATE testBoard SET title = ?, content = ? WHERE _id = ?', [title, content, _id]);  
        res.redirect(302, '/list').window.location.reload()
      } catch (error) {
        res.status(500).json({ error: error.message });
        
      }
  }
}
