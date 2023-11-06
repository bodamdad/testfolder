import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <Link href="/list">게시판</Link><br />
            <Link href="/about">ABOUT</Link>
            <Link href="/user/signup">회원가입</Link>
            <Link href="/user/info">회원정보</Link>
        </nav>
    )
}