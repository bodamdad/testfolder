import Link from 'next/link';
import CopyClipboard from '../components/CopyClipboard'

export default function Header() {

  return (
    <header id="header">
      <CopyClipboard />


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




