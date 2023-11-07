'use client'
import Link from 'next/link';

export default async function ListItem({posts}) {
  return (
    <div className="list-bg">

      <p>{posts[2].content}</p>
    {posts.map((postsDb, i)=>
          <div className="list-item" key={i}>
            <Link href={`/detail/${postsDb._id}`}><h4>{postsDb.title}</h4></Link>
            <p>{postsDb.content}</p>
            <p>{postsDb.no}</p>
            <Link href={`/edit/${postsDb._id}`}>수정</Link>
            <button onClick={(e)=>{
              fetch('/api/post/del', {method : 'POST', body : postsDb._id});
              e.target.parentElement.style.opacity = 0;
              setTimeout(()=>{
                e.target.parentElement.style.display = 'none';
              }, 1000)
            }}>삭제</button>
          </div>
      )}
      <Link href='/write' className='listWrite'>글쓰기</Link>
    </div>
  );
}
