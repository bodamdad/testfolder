export default async function Signup() {
    return (
      <div className="p-20">
        <form action="/api/user/signup/new" method="POST">
          <input name="id" placeholder="아이디"/>
          <input name="pw" placeholder="비밀번호"/>
          <input name="email" placeholder="이메일"/>
          <input name="phone" placeholder="휴대폰번호"/>
          <input name="name" placeholder="이름"/>
          <button type="submit">전송</button>
        </form>
      </div>
    )
  } 