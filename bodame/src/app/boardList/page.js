export default async function boardList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getDb`);
  const posts = await res.json();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>

    </div>
  );
}
