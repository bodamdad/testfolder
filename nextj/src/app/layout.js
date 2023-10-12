import './globals.css'
import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        
        <div className="navbar">
          <Link href="/">home</Link>
          <Link href="/list">list페이지</Link>
          <Link href="/abc/def">숙제페이지</Link>
        </div>
        <h1 className="title">Programming Log</h1>
        <p className="title-sub">by dev kim</p>
        {children}
      </body>
    </html>
  )
}
