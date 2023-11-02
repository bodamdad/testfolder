export default async function List({ id }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/testBoard/${id}`);
  const posts = await res.json();
  
  return (
    <div className="list-bg">
      <p>{posts._id}</p>
      <p>{posts.title}</p>
      <p>{posts.content}</p>
    </div>
  );
}
