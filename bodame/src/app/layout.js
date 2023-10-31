import '../css/globals.css'
import '../css/layout.css'
import '../css/common.css'
import Link from 'next/link';

export const metadata = {
  title: '보담이네',
  description: '보담이네 홈페이지 입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav>
          <Link href="/list">게시판</Link><br />
          <Link href="/about">ABOUT</Link>
        </nav>
        {children}</body>
    </html>
  )
}
