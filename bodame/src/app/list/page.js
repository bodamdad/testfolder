import Link from "next/link";

export default async function List(props) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/testBoard`);
  const posts = await res.json();
  
  return (
    <div className="list-bg">
      {posts.map((post, i)=>
          <div className="list-item" key={i}>
            <Link href={`/detail/${posts[i]._id}`}><h4>{posts[i].title}</h4></Link>
            <p>{posts[i].content}</p>
            <p>{posts[i]._id}</p>
          </div>
      )}
    </div>
  );
}
