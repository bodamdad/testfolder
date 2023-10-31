'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { _id } = router.query;
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/boardDetail/${_id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(error => console.error(error));
    }
  }, [router.isReady, router.query]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
}
