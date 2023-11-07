'use client'
import { useEffect, useState } from 'react';

export default function Detail() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const _id = window.location.pathname.split('/').pop();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/testBoard/${_id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error(error));
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="list-bg">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
