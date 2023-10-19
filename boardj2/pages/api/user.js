import { connection } from '/db/database.js';

export default async function handler(요청, 응답) {
    if (요청.method === "POST") {
      const { name, email, phone } = 요청.body;
  
      if(!name || !email || !phone) {
        return 응답.status(400).json({ message: '모든 필드를 입력해주세요.' });
      }
  
      try {
        await connection.query('INSERT INTO user (name, email, phone) VALUES (?, ?, ?)', [name, email, phone]);
        응답.status(200).json({ message: '성공적으로 추가되었습니다.' });
      } catch (error) {
        응답.status(500).json({ message: '서버 오류.' });
      }
    } else {
      응답.status(405).json({ message: "허용되지 않는 메서드입니다." });
    }
  }
  