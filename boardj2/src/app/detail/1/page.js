'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation'

export default function Detail(props) {
  const [board_test01, setBoard_test01] = useState();
  useEffect(() => {
      const fetchBoard_test01 = async () => {
      const response = await fetch('/api/board_test01');
      const data = await response.json();
      setBoard_test01(data);
    };

    fetchBoard_test01();
  }, []);


  if (!board_test01) return <div>Loading...</div>;
  let router = useRouter()
  return (
    <div>
      <Link href="/api/board_test01">board_test01</Link>
      <button onClick={()=>{ router.push('/')}}>홈</button>
      <h4>{board_test01[0].no}</h4>
      <h5>{board_test01[0].tit}</h5>
      <p>{board_test01[0].cat}</p>
      <p>{board_test01[0].cont}</p>
    </div>
  );
}
