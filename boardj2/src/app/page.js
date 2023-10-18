'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {

  const [test_user, setTest_user] = useState([]);

  useEffect(() => {
      const fetchMembers = async () => {
      const response = await fetch('/api/dbj');
      const data = await response.json();
      setTest_user(data);
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <h1>Members</h1>
      <Link href="/guide">GUIDE</Link>
      <ul>
        {test_user.map(({wr_num, wr_subject, wr_content}) => (
          <li key={wr_num}>
            <p>{wr_subject}</p>
            <p>{wr_content}</p>
          </li>
        ))}
      </ul>

          {
            <ul>
              <li>
                <img src="" />
                <p></p>
              </li>
            </ul>
          }



      {/* <span>{test_user[1].user_name}</span> */}
    </div>
  );
}
