import Link from 'next/link';

export default async function List(props) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/testBoard`);
  const posts = await res.json();
  
  return (
    <div className="list-bg">

      {posts.map((postsDb, i)=>
          <div className="list-item" key={i}>
            <Link href={`/detail/${postsDb._id}`}><h4>{postsDb.title}</h4></Link>
            <p>{postsDb.content}</p>
            <p>{postsDb._id}</p>
          </div>
      )}
      <Link href='/write' className='listWrite'>글쓰기</Link>
    </div>
  );
}
