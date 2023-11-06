import Link from 'next/link';

export default async function List() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`);
  const posts = await res.json();
  return (
    <div className="list-bg">

    {posts.map((postsDb, i)=>
        <div className="list-item" key={i}>
        <p>No. {postsDb.no}</p>
        <p>아이디 : {postsDb.id}</p>
        <p>비밀번호 : {postsDb.pw}</p>
        <p>이메일 : {postsDb.email}</p>
        <p>휴대폰번호 : {postsDb.phone}</p>
        <p>이름 : {postsDb.name}</p>
        </div>
      )}
    </div>
  );
}
