export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    const { title, content } = 요청.body;

   await database.insert({ title, content });

    응답.status(200).json({ message: "처리완료함" });
  } else {
    응답.status(405).json({ message: "허용되지 않는 메서드입니다." });
  }
}
