// pages/api/post/new.js
import db from '/lib/db';

export default async function handler(req, res) {

  let today = new Date();

  if (req.method === 'GET') {
    try {
      res.status(200).json(today);
      res.status(500).json({ message: 'Post created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
