'use client'
import Link from 'next/link';

export default function ListItem({posts}) {
  const reversedPosts = [...posts].reverse();

  return (
    <div className="list-bg">

    {reversedPosts.map((postsDb, i)=>
          <div className="list-item" key={i}>
            <Link href={`/detail/${postsDb._id}`}><h4>{postsDb.title}</h4></Link>
            <p>{postsDb.content}</p>
            <p>{postsDb.no}</p>
            <Link href={`/edit/${postsDb._id}`}>수정</Link>
          </div>
      )}
      <Link href='/write' className='listWrite'>글쓰기</Link>
    </div>
  );
}
