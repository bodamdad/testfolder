'use client'
import { useEffect, useState } from 'react';

export default function Detail() {
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
    <div className="list-bg">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
