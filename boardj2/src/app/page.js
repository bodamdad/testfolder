'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {

  const [test_user, setTest_user] = useState([]);
  const [board_test01, setBoard_test01] = useState([]);

  useEffect(() => {
      const fetchMembers = async () => {
      
        const test_userResponse = await fetch('/api/test_user');
        const test_userData = await test_userResponse.json();
        setTest_user(test_userData);

        const board_test01Response = await fetch('/api/board_test01');
        const board_test01Data = await board_test01Response.json();
        setBoard_test01(board_test01Data);
    };

    fetchMembers();
  }, []);

  if (test_user.length === 0 || board_test01.length === 0) return <div>Loading...</div>;
  console.log(test_user[0]?.user_id);
  return (
    <div>
      <h1>Members</h1>
      <Link href="/guide">GUIDE</Link>
      <Link href="/write">WRITE</Link>
      <Link href="/user">회원가입</Link>
      <ul>


        {test_user.map(({user_id, user_name, user_email}) => (
          <li key={user_id}>
            <p>{user_id}</p>
            <p>{user_name}</p>
            <p>{user_email}</p>
          </li>
        ))}
      </ul>

      <h4>{test_user[0].user_id}</h4>
{/* 
      <h4>{board_test01[0]}</h4>
      <h5>{board_test01[0]}</h5>
      <p>{board_test01[0]}</p>
      <p>{board_test01[0]}</p> */}



    </div>
  );
}
