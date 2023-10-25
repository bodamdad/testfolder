import '../css/globals.css'
import '../css/layout.css'
import '../css/common.css'
import Header from '../components/Header'
import ScrollButtons from '../components/ScrollButtons'

export const metadata = {
  title: '가이드',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div id="wrap">
          <Header />
          <ScrollButtons />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
