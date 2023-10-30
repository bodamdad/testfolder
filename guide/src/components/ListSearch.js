'use client'
import React, { useState, useEffect } from 'react';

export default function SearchController() {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const handleSearchInput = (event) => {
      const inputText = event.target.value.toLowerCase();
      const lists = document.querySelectorAll('.listWrap .list');
      lists.forEach(list => {
        const textMatch = list.querySelector('h3').innerText.toLowerCase().includes(inputText);
        list.style.display = textMatch ? 'flex' : 'none';
      });
    };

    const searchInput = document.querySelector('.search');
    searchInput.addEventListener('input', handleSearchInput);

    return () => {
      searchInput.removeEventListener('input', handleSearchInput);
    };
  }, []);

  return (
    <div className='listSearchWrap'>
      <input className="search" type="text" placeholder="title 검색" onChange={e => setSearchText(e.target.value)}/>
      <button>초기화</button>
    </div>
  );
}
