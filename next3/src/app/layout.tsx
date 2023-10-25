import type { Metadata } from 'next'
import '../css/globals.css'
import '../css/layout.css'
import '../css/common.css'
import Header from '../components/header/Header'

export const metadata: Metadata = {
  title: '가이드',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <div id="wrap">
          <Header />
          <main>
            {children}
          </main>
          <button className="material-icons top" aria-label="top">navigation</button>
        </div>
      </body>
    </html>
  )
}
