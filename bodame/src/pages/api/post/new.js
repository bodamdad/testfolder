import db from '/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content } = req.body;  // 요청 본문에서 title과 content를 추출합니다.
    try {
      await db.execute('INSERT INTO testBoard (title, content) VALUES (?, ?)', [title, content]);  // 데이터를 데이터베이스에 저장합니다.
      res.redirect(302, '/list')
    } catch (error) {
      res.status(500).json({ error: error.message });
      
    }
  }

  if (req.method === 'GET') {
    try {
      const [rows] = await db.execute('SELECT _id, title FROM testBoard');  // 데이터베이스에서 데이터를 가져옵니다.
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
