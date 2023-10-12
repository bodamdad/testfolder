'use client';

import './globals.css'
import Link from "next/link";
import Image from 'next/image'



export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        
        <div className="navbar">
          <Link href="/">home</Link>
          <Link href="/guide">GUIDE</Link>
          <Link href="/list">LIST</Link>
          <Link href="/cart">CART</Link>
        </div>
        <h1 className="title">Programming Log</h1>
        <p className="title-sub">by dev kim</p>
        {children}

        <button className="btnTop" onClick={()=>{
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}>Top</button>
      </body>
    </html>
  )
}
