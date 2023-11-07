import Link from 'next/link';
import { authOptions } from "@/pages/api/auth/[...nextauth].js"
import { getServerSession } from "next-auth"
import LoginBtn from '../app/LoginBtn'
import LogoutBtn from '../app/LogoutBtn'

export default async function Nav() {
    let session = await getServerSession(authOptions)
    return (
        <nav>
            <Link href="/list">게시판</Link><br />
            <Link href="/about">ABOUT</Link>
            <Link href="/user/signup">회원가입</Link>
            
            <div className='userWrap'>
                {session ? <span>{session.user.name} | {session.user.email} | <LogoutBtn /></span> : <LoginBtn />}
            </div>
        </nav>
    )
}