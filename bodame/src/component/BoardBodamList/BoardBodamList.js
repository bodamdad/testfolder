'use client'
import React, { useEffect, useState } from 'react';

function Layout() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* Render data */}
      {data && data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Layout;
