import Link from 'next/link';
import ListItem from './ListItem';

export default async function List(props) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/testBoard`);
  const posts = await res.json();

  return (
    <div className="list-bg">
      <Link href='/write' className='listWrite'>글쓰기</Link>
      <ListItem posts={posts}/>
    </div>
  );
}
