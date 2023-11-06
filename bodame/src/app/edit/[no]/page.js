'use client'
import { useEffect, useState } from 'react';

export default function Edit() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const no = window.location.pathname.split('/').pop();
    fetch(`/api/testBoard/${no}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error(error));
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-20">
      <form action="/api/post/new" method="PUT">
        <input name="title" placeholder="글제목" defaultValue={post.title}/>
        <input name="content" placeholder="글내용" defaultValue={post.content}/>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

