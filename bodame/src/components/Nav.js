import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <Link href="/list">게시판</Link><br />
            <Link href="/about">ABOUT</Link>
        </nav>
    )
}