'use client'
import Link from 'next/link';
import './header.css';

export default function Nav() {
  
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        let copy = document.qureySelector('.copy');
        if(copy) {
          copy.classList.add('active');
          setTimeout(()=>{
            copyFile.classList.remove('active');
          }, 1000)
        }
        
      })
      .catch(error => alert('error!'));
  };
  
  return (
    <header id="header">

      <div className="copyWrap">
        <p className="copy01">이 텍스트를 복사하세요</p>
        <button className="btnCopy01" onClick={() => handleCopy(document.querySelector('.copy01').innerText)}>Copy</button>
      </div>

      <nav id="nav">
          <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/type">TypeScript</Link></li>
              <li><Link href="/next">Next.js</Link></li>
          </ul>
      </nav>
      <div className="copyPop">
        <p>복사되었습니다.</p>
      </div>
    </header>
  )
}




