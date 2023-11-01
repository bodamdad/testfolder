import '../css/globals.css'
import '../css/common.css'
import '../css/layout.css'
import Nav from '../components/Nav';


export const metadata = {
  title: '보담이네',
  description: '보담이네 홈페이지 입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        {children}</body>
    </html>
  )
}
