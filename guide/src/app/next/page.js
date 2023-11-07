import Image from 'next/image';
import CodeHighlighter from '../../components/CodeHighlighter'
import ListSearch from '../../components/ListSearch'

export default function Next() {
  return (
    
    <div className="listWrap">
      <CodeHighlighter />
      <h2>Next.JS <p>(13버전기준)</p></h2>
      <ListSearch />
      <div>
      {/* aaaaaaaaaaaaaa
<div className="list">
  <h3>aaaaaaaaaaaaaa</h3>
  <div className="cont">
    <p>ppppppppp</p>
    <code className='code'>cccccccc</code>
  </div>
</div>
 */}  
 
      {/* 회원 라이브러리 */}
<div className="list">
  <h3>회원 라이브러리</h3>
  <div className="cont">
    <p>next-auth</p>
    <code className='code'>npm install next-auth</code>

    <p>GitHub의 경우</p>
    <p>Github.com 로그인하면 우측상단 Settings -&#62; Developer settings -&#62; OAuth app -&#62; New OAuth App -&#62; 내용입력<br/>
      Client ID, Client secrets 번호 복사</p>
    <p>NextAuth 라이브러리 셋팅 (secret : JWT생성용 암호 맘대로 길게 입력하면 됩니다.)</p>
    <code className='code'>
import NextAuth from "next-auth";<br/>
import GithubProvider from "next-auth/providers/github";<br/><br/>

export const authOptions = &#123;<br/>
&nbsp;&nbsp;  providers: [<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  GithubProvider(&#123;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  clientId: 'Github에서 발급받은ID',<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  clientSecret: 'Github에서 발급받은Secret',<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &#125;),<br/>
&nbsp;&nbsp;  ],<br/>
&nbsp;&nbsp;  secret : 'jwt생성시쓰는암호'<br/>
&#125;;<br/>
export default NextAuth(authOptions); 
    </code>

    <p>버튼 (/app/LoginBtn.js)</p>
    <code className='code'>
'use client';<br/>
import &#123; signIn &#125; from 'next-auth/react'<br/><br/>

export default function LoginBtn() &#123;<br/>
&nbsp;&nbsp;return &#60;button onClick=&#123;() =&#62; &#123; signIn() &#125;&#125;&#62;로그인&#60;/button&#62;<br/>
&#125; 
    </code>

    <p>server component에서 유저정보 출력</p>
    <code className='code'>
import &#123; authOptions &#125; from "@/pages/api/auth/[...nextauth].js"<br/>
import &#123; getServerSession &#125; from "next-auth"<br/><br/>

export default function Page()&#123;<br/>
&nbsp;&nbsp;  let session = await getServerSession(authOptions)<br/>
&nbsp;&nbsp;  if (session) &#123;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  console.log(session)<br/>
&nbsp;&nbsp;  &#125;<br/>
&#125;
    </code>
  </div>
</div>

{/* 서버 ... */}
<div className="list">
  <h3>서버에 데이터 주고받기<br/>게시판예시</h3>
  <div className="cont">
    <p>유저에게 데이터전송 <span className='red'>GET</span>, 입력 <span className='red'>POST</span>, 수정 <span className='red'>PUT</span>, 삭제 <span className='red'>DELETE</span></p>
    <p>form 태그로 전송시 PUT, DELETE는 사용할 수 없어 외부 라이브러리를 설치해야함</p>



    <p>src/app/list/page.js (게시판리스트)</p>
    <code className='code'>
import Link from 'next/link';<br/><br/>

export default async function List(props) &#123;<br/>
&nbsp;&nbsp;  const res = await fetch(`$&#123;process.env.NEXT_PUBLIC_API_URL&#125;/api/testBoard`);<br/>
&nbsp;&nbsp;  const posts = await res.json();<br/>
&nbsp;&nbsp;  return (<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &#60;div className="list-bg"&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#123;posts.map((postsDb, i)=&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#60;div className="list-item" key=&#123;i&#125;&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#60;Link href=&#123;`/detail/$&#123;postsDb.no&#125;`&#125;&#62;&#60;h4&#62;&#123;postsDb.title&#125;&#60;/h4&#62;&#60;/Link&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#60;p&#62;&#123;postsDb.content&#125;&#60;/p&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#60;p&#62;&#123;postsDb.no&#125;&#60;/p&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#60;Link href=&#123;`/edit/$&#123;postsDb.no&#125;`&#125;&#62;수정&#60;/Link&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#60;/div&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  )&#125;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#60;Link href='/write' className='listWrite'&#62;글쓰기&#60;/Link&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &#60;/div&#62;<br/>
&nbsp;&nbsp;  );<br/>
&#125;

    </code>

    <p>src/app/write/page.js (글쓰기)</p>
    <code className='code'>
export default async function Write() &#123;<br/>
  &nbsp;&nbsp;return (<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;div className="p-20"&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;form <span className='red'>action="/api/post/new"</span> <span className='red'>method="POST"</span>&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;input name="title" placeholder="글제목"/&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;input name="content" placeholder="글내용"/&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;button type="submit"&#62;전송&#60;/button&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;/form&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;form action="/api/post/new2" <span className='red'>method="GET"</span>&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;button type="submit"&#62;현재시간은&#60;/button&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;/form&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;/div&#62;<br/>
  &nbsp;&nbsp;)<br/>
&#125; 
    </code>

    <p>form의 arction에서 받은 url로 method가 전송됩니다.</p>
    <code className='code'>
import db from '/lib/db';<br/><br/>

export default async function handler(req, res) &#123;<br/>
  &nbsp;&nbsp;if (req.method === 'POST') &#123;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;const &#123; title, content &#125; = req.body;  // 요청 본문에서 title과 content를 추출합니다.<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;try &#123;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;await db.execute('INSERT INTO testBoard (title, content) VALUES (?, ?)', [title, content]);  // 데이터를 데이터베이스에 저장합니다.<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;res.redirect(302, '/list');<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;&#125; catch (error) &#123;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;res.status(500).json(&#123; error: error.message &#125;);<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;&#125;<br/>
  &nbsp;&nbsp;&#125;<br/><br/>
&#125;

    </code>

    <p>src/app/detail/[no]/page.js (상세페이지 리스트에서 선택한 게시물의 정보를 가져옴)</p>
    <code className='code'>
'use client'<br/>
import &#123; useEffect, useState &#125; from 'react';<br/><br/>

export default function Detail() &#123;<br/>
&nbsp;&nbsp;  const [post, setPost] = useState(null);<br/>
&nbsp;&nbsp;
&nbsp;&nbsp;  useEffect(() =&#62; &#123;<br/><br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  const no = window.location.pathname.split('/').pop();<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  fetch(`/api/testBoard/$&#123;no&#125;`)<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  .then(response =&#62; response.json())<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  .then(data =&#62; setPost(data))<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  .catch(error =&#62; console.error(error));<br/>
&nbsp;&nbsp;  &#125;, []);<br/><br/>
&nbsp;&nbsp;
&nbsp;&nbsp;  if (!post) &#123;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  return &#60;div&#62;Loading...&#60;/div&#62;;<br/>
&nbsp;&nbsp;  &#125;<br/><br/>
&nbsp;&nbsp;
&nbsp;&nbsp;  return (<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &#60;div className="list-bg"&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#60;h1&#62;&#123;post.title&#125;&#60;/h1&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &#60;p&#62;&#123;post.content&#125;&#60;/p&#62;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  &#60;/div&#62;<br/>
&nbsp;&nbsp;  );<br/>
&#125;

    </code>

    <p>src/pages/api/testBoard/[no].js(상세페이지에서 불러올 데이터를 필터해주는 소스)</p>
    <code className='code'>
import db from '/lib/db';<br/><br/>

export default async (req, res) =&#62; &#123;<br/>
&nbsp;&nbsp;  const &#123; no &#125; = req.query;<br/>
&nbsp;&nbsp;  try &#123;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  const [rows] = await db.execute('SELECT * FROM testBoard WHERE no = ?', [no]);<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  res.status(200).json(rows[0]);<br/>
&nbsp;&nbsp;  &#125; catch (error) &#123;<br/>
&nbsp;&nbsp;  &nbsp;&nbsp;  res.status(500).json(&#123; error: error.message &#125;);<br/>
&nbsp;&nbsp;  &#125;<br/>
&#125;;

    </code>

    <p></p>
    <code className='code'>
      
    </code>

    <p></p>
    <code className='code'>
      
    </code>

  </div>
</div>

{/* 데이터 연결 */}
<div className="list">
  <h3>데이터 연결 (mariaDB)</h3>
  <div className="cont">
    <p>
      서버 데이터베이스 연결하기<br/>
      /lib/db.js
    </p>
    <code className='code'>
    import mysql from 'mysql2/promise';<br/><br/>

    const pool = mysql.createPool(&#123;<br/>
      &nbsp;&nbsp;host: 'bodam-e.com',<br/>
      &nbsp;&nbsp;user: 'ljlj123',<br/>
      &nbsp;&nbsp;password: 'Lj!13402413',<br/>
      &nbsp;&nbsp;database: 'bodame'<br/>
      &#125;);

    export default pool;
    </code>

    <p>
      데이터베이스에서 특정 테이블 불러오기<br/>
      
    </p>
    <code className='code'>
      import db from '/lib/db';<br/><br/>
      export default async (req, res) =&#62; &#123;<br/>
        &nbsp;&nbsp;try &#123;<br/>
        &nbsp;&nbsp;  &nbsp;&nbsp;const [rows] = await db.execute('SELECT * FROM testBoard');<br/>
        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;res.status(200).json(rows);<br/>
        &nbsp;&nbsp;  &nbsp;&nbsp;&#125; catch (error) &#123;<br/>
        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;res.status(500).json(&#123; error: error.message &#125;);<br/>
        &nbsp;&nbsp;&#125;<br/>
      &#125;;
    </code>

<p>
  페이지에서 적용하기<br/>
  <span className='red'>$&#123;process.env.NEXT_PUBLIC_API_URL&#125;</span> 부분은 url 부분이라 따로 파일로 뺌<br/>
  src/app/list/page.js (app 폴더 내부에 아무페이지)
</p>
<code>
  export default async function List() &#123;<br/>
  &nbsp;&nbsp;const res = await fetch(`$&#123;process.env.NEXT_PUBLIC_API_URL&#125;/api/testBoard`);<br/>
  &nbsp;&nbsp;const posts = await res.json();<br/><br/>
  &nbsp;&nbsp;return (<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;div&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;p&#62;&#123;posts[0].content&#125;&#60;/p&#62;<br/>
  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;/div&#62;<br/>
  &nbsp;&nbsp;);<br/>
  &#125;

</code>

<p>
<span className='red'>$&#123;process.env.NEXT_PUBLIC_API_URL&#125;</span> 부분 파일<br/>
루트의 .env 파일
</p>
<code className='code'>
NEXT_PUBLIC_API_URL=http://localhost:3000
</code>

  </div>
</div>

        {/* 프로젝트 생성하기 */}
        <div className="list">
          <h3>프로젝트 생성하기</h3>
          <div className="cont">
            <p>터미널에서 아래 문구 입력</p>
            <code>npx create-next-app@latest</code>
          </div>
        </div>

        {/* next 미리보기 */}
        <div className="list">
          <h3>next 미리보기</h3>
          <div className="cont">
            <p>터미널에서 아래 문구 입력</p>
            <code>npm run dev </code>
          </div>
        </div>
        
        {/* 기본 */}
        <div className="list">
          <h3>기본</h3>
          <div className="cont">
            <p>return 안에 태그 하나만 넣기</p>
            <code className='code'>
              return (<br/>
              &nbsp; &#60;div&#62;<br/>
              &nbsp; &nbsp; 어쩌구<br/>
              &nbsp; &#60;/div&#62;<br/>
              )
            </code>

            <p>class 말고 className 넣기</p>
            <code className='code'>
            export default function Home() &#123;<br/>
            &nbsp; return (<br/>
            &nbsp; &nbsp; &#60;div&#62;<br/>
            &nbsp; &nbsp; &nbsp; &#60;h4 className="title"&#62;애플후레시&#60;/h4&#62;<br/>
            &nbsp; &nbsp; &nbsp; &#60;p className="title-sub"&#62;by dev kim&#60;/p&#62;<br/>
            &nbsp; &nbsp; &#60;/div&#62;<br/>
              )
              &#125;
            </code>

            <p>변수 넣기 &#123;link&#125;</p>
            <code className='code'>
            let name = 'park';
            let link = 'https://naver.com';<br/>
            &#60;p className="title-sub"&#62;by dev &#123;name&#125;&#60;/p&#62;
            &#60;a href=&#123;link&#125;&#62;링크&#60;/a&#62;
            </code>

            <p>인라인 CSS 넣기style=&#123;&#123; color: 'red' &#125;&#125;</p>
            <code className='code'>
            &#60;h4 className="title" style=&#123;&#123; color : 'red', fontSize : '20px' &#125;&#125;&#62;애플후레시&#60;/h4&#62;
            </code>
          </div>
        </div>
        
        {/* 훅(Hook) */}
        <div className="list">
          <h3>훅(Hook)</h3>
          <div className="cont">
            <p>종류 : useState, useEffect, useContext</p>
            <p>useState</p>
            <code className='code'>
            import React, &#123; useState &#125; from 'react';<br/><br/>
            function Counter() &#123;<br/>
            &nbsp; const [count, setCount] = useState(0);<br/>
            </code>
          </div>
        </div>
        
        {/* 라우팅 */}
        <div className="list">
          <h3>라우팅</h3>
          <div className="cont">
            <p>
              페이지 나누는걸 라우팅이라 한다<br/>
              &nbsp; 1. app 폴더안에 폴더하나 작명하고<br/>
              &nbsp; 2. 폴더 page.js 파일 만들고 안에 html 작성하면<br/>
              &nbsp; 자동으로 url과 페이지가 완성된다. (localhost:3000/list)
            </p>
            <code className='code'>
            (list/page.js)<br/><br/>
            export default function List() &#123;<br/>
            &nbsp;&nbsp;return (<br/>
            &nbsp;&nbsp;&#60;div&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;소스내용<br/>
            &nbsp;&nbsp;&#60;/div&#62;<br/>
            &nbsp;&nbsp;)<br/>
              &#125; 
            </code>
          </div>
        </div>
        
        {/* 페이지 구조 */}
        <div className="list">
          <h3>페이지 구조</h3>
          <div className="cont">
            <p>app폴더 안에 페이지로 구성</p>
            <p>layout.js는 특정폴더안에 layout.js가 들어가고 폴더로 페이지를 만들경우 해당 폴더에 해당 layout.js가 모두 적용됨</p>
            <code className='code'>
            export default function Layout(&#123; children &#125;) &#123;<br/>
            &nbsp;&nbsp;return (<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;div className='wrap'&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;children&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;/div&#62;<br/>
            &nbsp;&nbsp;)<br/>
            &#125;
            </code>
          </div>
        </div>

        {/* 반복문 */}
        <div className="list">
          <h3>반복문</h3>
          <div className="cont">
            <p>모든 array 자료 우측엔 map() 함수를 붙일 수 있습니다.</p>
            <p>기능 1. array에 들어있는 자료갯수만큼 그 안에 있는 코드를 반복실행해줍니다.</p>
            <p>기능 2. 콜백함수(a)에 파라미터 아무렇게나 작명하면 그 파라미터는 반복실행될 때 마다 차례로 array 안의 자료들을 하나씩 넣어줍니다.</p>
            <p>기능 3. return 오른쪽에 뭐 적으면 array로 담아줍니다.</p>
            <code className='code'>
            let 어레이 = [2,3,4];<br/>
            let newArray = 어레이.map((a)=&#62;&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;return a * 10<br/>
            &#125;);<br/>
            console.log(newArray)
            </code>
            <p>
              반복문 사용시 key값 넣기 (권장) (key=&#123;i&#125;<br/>
              i는 0부터 시작고 어레이 갯수만큼 늘어남
            </p>
            <code className='code'>
              상품.map((a, i)=&#62;&#123;<br/>
              return (<br/>
              &#60;div className="food" key=&#123;i&#125;&#62;<br/>
              &#60;h4&#62;&#123;a&#125; $40&#60;/h4&#62;<br/>
              &#60;/div&#62;<br/>
              )<br/>
              &#125;) 
            </code>
            
            <p>객체의 경우</p>
            <code className='code'>

              &#60;div className="list-bg"&#62;<br/>
                &nbsp;&nbsp;let posts = &#91;&#123;_id : 'asjdjf', title : '타이틀1', content : '컨텐츠1'&#125;, &#123;_id : 'asjdjf2', title : '타이틀2', content : '컨텐츠2'&#125;, &#123;_id : 'asjdjf3', title : '타이틀3', content : '컨텐츠3'&#125;	&#93;<br/>
                &nbsp;&nbsp;&#123;posts.map((postsDb, i)=&#62;<br/>
                &nbsp;&nbsp;  &nbsp;&nbsp;&#60;div className="list-item" key=&#123;i&#125;&#62;<br/>
                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;Link href=&#123;`/detail/$&#123;postsDb._id&#125;`&#125;&#62;&#60;h4&#62;&#123;postsDb.title&#125;&#60;/h4&#62;&#60;/Link&#62;<br/>
                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;p&#62;&#123;postsDb.content&#125;&#60;/p&#62;<br/>
                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;&#60;p&#62;&#123;postsDb._id&#125;&#60;/p&#62;<br/>
                &nbsp;&nbsp;  &nbsp;&nbsp;&#60;/div&#62;<br/>
                &nbsp;&nbsp;)&#125;<br/>
              &#60;/div&#62;

            </code>


            <p>
              return 만 있을경우 생략가능 (중괄호, 소괄호도 같이 생략)
            </p>
            <code className='code'>
              상품.map((a, i)=&#62;<br/>
              &#60;div className="food" key=&#123;i&#125;&#62;<br/>
              &#60;h4&#62;&#123;a&#125; $40&#60;/h4&#62;<br/>
              &#60;/div&#62;<br/>
              ) 
            </code>
          </div>
        </div>

        {/* 최적화이미지 넣는 법 */}
        <div className="list">
          <h3>최적화이미지 넣는 법</h3>
          <div className="cont">
            <p>
              성능과 속도가 중요하다면 이미지 넣을 때 &#60;Image /&#62; 태그를 씁시다.<br/>
              그럼 자동으로 이미지 lazy loading & 사이즈 최적화 & layout shift 방지를 해줍니다. 
            </p>
            <p>※ 외부이미지를 가져올 경우 설정할게 많아.... 그냥 img태그 씁시다.</p>
            <code className='code'>
              import Image from 'next/image'<br/>
              import 이미지 from './food0.png'<br/><br/>

              &#60;Image src=&#123;이미지&#125; alt="설명"/&#62;
            </code>
          </div>
        </div>

        {/* 컴포넌트 만들기*/}
        <div className="list">
          <h3>컴포넌트 만들기(component)</h3>
          <div className="cont">
            <p>컴포넌트 만들고 싶으면 우선 function을 만들고 작명합니다. 관습적으로 영어 대문자로 시작합니다.</p>
            <p>function의 return ( ) 안에 축약할 html을 담습니다.</p>
            <code className='code'>
            function Item()&#123;<br/>
            &nbsp;&nbsp;return(<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="cart-item"&#62;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;p&#62;상품명&#60;/p&#62;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;p&#62;$40&#60;/p&#62;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;p&#62;1개&#60;/p&#62;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#60;/div&#62;<br/>
            &nbsp;&nbsp;)<br/>
            &#125;             
            </code>

            <p>import를 하고</p>
            <p>원하는 곳에서 &#60;작명/&#62; 을 사용합니다. &#60;Header /&#62;</p>
            <p>그럼 그 자리에 return( ) 안에 있던 html들이 붙여넣어집니다.</p>
            <code className='code'>
            import Item from '../../components/Item';<br/><br/>
            export default function Cart() &#123;<br/>
            &nbsp;&nbsp;return (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#60;div&#62;<br/>
              <span className='green'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Item /&#62;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#60;/div&#62;<br/>
            &nbsp;&nbsp;)<br/>
            &#125;<br/><br/>
  
            </code>
          </div>
        </div>

        {/* server, client 컴포넌트 */}
        <div className="list">
          <h3>server, client 컴포넌트</h3>
          <div className="cont">
            <h4>server component</h4>
            <p>컴포넌트는 기본적으로 모두 server component 입니다.</p>
            <p>장점 : 페이지 로드시 자바스크립트가 별로 필요가 없어서 빠름</p>
            <p>단점 : html 안에 자바스크립트를 못 넣습니다. useState, useEffect, onClick 이런거 사용불가능합니다.</p>
            <p>컴포넌트 만들 때 페이지 맨 위에 <span className='red'>'use client'</span> 라는 코드를 넣으면 그 밑에 있는 모든 컴포넌트는 client component가 됩니다. </p>
            
            <h4>client component</h4>
            <p>장점 : html 안에 자바스크립트 맘대로 넣어서 기능개발 가능</p>
            <p>단점 : 쓸데없는 자바스크립트로 인해 페이지 용량도 커지고 페이지 로딩속도도 약간 느려질 수 있습니다. </p>
            
            <code className='code'>'use client'</code>
          </div>
        </div>

{/* import / export 문법 */}
<div className="list">
  <h3>import / export 문법</h3>
  <div className="cont">
    <p>이 파일에 있는 변수나 함수를 다른 파일에서 사용하고 싶으면 <span className='red'>export default 변수함수명</span> 쓰면 됩니다. </p>
    <p>내보낸다는 뜻의 문법인데 내보내야 다른 파일에서 쓸 수 있음 </p>
    <code className='code'>
      let age = 20;<br/>
      export default age;
    </code>
    <p>다른 파일에서 export default 했던걸 가져다가 쓰고 싶으면 <span className='red'>import 작명 from 파일경로</span> 쓰면 됩니다.</p>
    <code className='code'>
      import 작명 from './data.js'<br/>
      console.log(작명)
    </code>

    <p>여러 변수나 함수를 export 하고 싶으면 <span className='red'>export &#123; 변수1, 변수2 &#125;</span> 합시다. </p>
    <p><span className='red'>import &#123;변수1, 변수2&#125; from 파일경로</span> 쓰면 됩니다. </p>
    <p>export &#123; &#125; 해놓은 것들은 import 할 때 작명하면 안되고 변수명 그대로 써야합니다. </p>
  </div>
</div>

{/* props */}
<div className="list">
  <h3>props</h3>
  <div className="cont">
    <p>원래 하나의 컴포넌트는 다른 컴포넌트에 있는 변수를 사용할 수 없습니다. <br/>
      하지만 각 컴포넌트가 부모 자식관계인 경우 props 문법을 사용하면 이용가능합니다. 
    </p>
    <p>props는 부모에 있는것을 자식컴포넌트에서만 사용가능합니다.</p>
    <p>형제요소나 부모요소로 보내는건 불가능</p>
    <p>1. 자식컴포넌트 사용하는 곳에 가서 <span className='red'>&#60;자식컴포넌트 작명=&#123;전해줄데이터&#125; /&#62;</span> </p>
    <p>2. 자식컴포넌트 정의부분으로 가서 props라는 파라미터 등록 후 props.작명 사용</p>
    <p>이러면 부모가 자식에게 변수나 데이터를 전송해줄 수 있습니다.</p>
    <p>
      (참고1) props는 &#60;CartItem 이런거=&#123;이런거&#125;  저런거=&#123;저런거&#125;&#62; 이렇게 많이 전송가능<br/>
      (참고2) 일반 문자데이터 전송하려면 중괄호 없이 &#60;CartItem 어쩌구="어쩌구"&#62; 해도 됩니다.
    </p>
    <code className='code'>
      export default function Cart() &#123;<br/>
        &nbsp;&nbsp; let 장바구니 = ['Tomatoes', 'Pasta']<br/>
        &nbsp;&nbsp; return (<br/>
        &nbsp;&nbsp;&nbsp;&nbsp; &#60;div&#62;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#60;h4&#62;Cart&#60;/h4&#62;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#60;CartItem 상품=&#123;장바구니[0]&#125;/&#62;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#60;CartItem 상품=&#123;장바구니[1]&#125;/&#62;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp; &#60;/div&#62;<br/>
        &nbsp;&nbsp; )<br/>
        &#125;<br/><br/>

        function CartItem(props)&#123;<br/>
        &nbsp;&nbsp; return(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp; &#60;div className="cart-item"&#62;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#60;p&#62;&#123;props.상품&#125;&#60;/p&#62;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#60;p&#62;$40&#60;/p&#62;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#60;p&#62;1개&#60;/p&#62;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp; &#60;/div&#62;<br/>
        &nbsp;&nbsp; )<br/>
      &#125;  
    </code>
  </div>
</div>

{/* state 문법 */}
<div className="list">
  <h3>state 문법</h3>
  <div className="cont">
    <p>변경이 자주 되는 값들은 state 변수로 넣자.</p>
    <p>상단에 import 불러와주고 변수를 아래 형태처럼 만든 후 <span className='red'>set작명에 데이터를 수정</span>해준다</p>
    <code className='code'>
      import &#123;useState&#125; from 'react'<br/>
      let [변수이름작명, 함수작명] = useState(변수에넣을값);
    </code>
    <code className='code'>
      import &#123;useState&#125; from 'react'<br/>
      let [count, setCount] = useState(0);<br/><br/>

      &#60;p className='num'&#62;&#123;count&#125;&#60;/p&#62;<br/>
      &#60;h4 onClick=&#123;()=&#62;&#123; setCount(count++); &#125;&#125;&#62;버튼&#60;/h4&#62;<br/>
    </code>
    <p>array로도 가능</p>
    <code className='code'>
      let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];<br/>
      let [수량, 수량변경] = useState([0,0,0]);
    </code>
    <p>
      위에 array 값 변경은 ...을 사용해야한다<br/>
      기존 array를 복사해서 사용(복사시 ...포함하여 복사)
    </p>
    <code className='code'>
&#60;span&#62;&#123;수량[0]&#125;&#60;/span&#62;<br/>
&#60;button onClick=&#123;()=&#62;&#123; <br/>
&nbsp;&nbsp;let copy = [...수량]<br/>
&nbsp;&nbsp;copy[0]++<br/>
&nbsp;&nbsp;수량변경(copy)<br/>
&#125;&#125;&#62;+&#60;/button&#62;
    </code>

    <code className='code'></code>
    <code className='code'></code>
  </div>
</div>       

      </div>
    </div>
  )
}
