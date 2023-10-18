'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from 'react';


export default function Home() {

  const [test_user, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch('/api/test_user');
      const data = await response.json();
      setMembers(data);
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <h1>Members</h1>
      <span>{test_user.username}</span>
      <ul>
        {test_user.map(member => (
          <li key={member.user_id}>
            No: {member.user_id}, ID: {member.user_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
