import Link from 'next/link';
import CopyClipboard from '../components/CopyClipboard'

export default function Header() {

  return (
    <header id="header">
      <CopyClipboard />

      <div className="copyWrap">
        <p className="copyText">최신정보(꼭. 최신정보 인터넷에서 분석해서 알려줘)<br/><br/></p>
        <button className="btnCopy">GPT최신정보</button>
        <div className='group'>
          <p className="copyText">{'&#123;'}</p>
          <button className="btnCopy">{'{'}</button>
          <p className="copyText">{'&#125;'}</p>
          <button className="btnCopy">{'}'}</button>
          <p className="copyText">{'&#60;'}</p>
          <button className="btnCopy">{'<'}</button>
          <p className="copyText">{'&#62;'}</p>
          <button className="btnCopy">{'>'}</button>
        </div>
        <div className='group'>
          <p className="copyText">{'&nbsp; '}</p>
          <button className="btnCopy">{'&nbsp'}</button>
          <p className="copyText">{'<br/>'}</p>
          <button className="btnCopy">{'<br/>'}</button>
        </div>

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




