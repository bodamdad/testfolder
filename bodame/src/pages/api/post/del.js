import db from '/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { _id } = req.body;  
    try {
      await db.execute('DELETE FROM testBoard WHERE _id = ?', [_id]);
      res.redirect(302, '/list')
    }catch (error) {
      res.status(500).json({ error: error.message });
        
      }
  } else if (req.method === 'GET') {
    console.log('getttt')
  }
}
