import { Inter } from 'next/font/google'
import '/css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '보담이네',
  description: '보담이네 홈페이지 입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
