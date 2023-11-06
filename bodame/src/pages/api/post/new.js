import db from '/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content } = req.body;
    try {
      await db.execute('INSERT INTO testBoard (title, content) VALUES (?, ?)', [title, content]); 
      res.redirect(302, '/list')
    } catch (error) {
      res.status(500).json({ error: error.message });
      
    }
  }
  if (req.method === 'PUT') {
    const { no, title, content } = req.body;  
  try {
      await db.execute('UPDATE testBoard SET title = ?, content = ? WHERE no = ?', [title, content, no]);  
      res.redirect(302, '/list')
    } catch (error) {
      res.status(500).json({ error: error.message });
      
    }
  }
};

