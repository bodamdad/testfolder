import Link from "next/link";

export default function User() {

  return (
    <div>
      <h3>회원가입</h3>
      
      <p>이름 : </p>
      <p>이메일 : </p>
      <p>휴대폰 : </p>

      <Link href="./user/write">가입</Link>
    </div>
  );
}
