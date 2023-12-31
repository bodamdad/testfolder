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
};

