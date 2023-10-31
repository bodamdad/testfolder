export default async function List() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getDb`);
  const posts = await res.json();

  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
    </div>
  );
}
