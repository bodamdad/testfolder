import Image from 'next/image';
import CodeHighlighter from '../../components/CodeHighlighter'
import ListSearch from '../../components/ListSearch'
import guide01 from '/public/images/guide/guide01.png';
import guide02 from '/public/images/guide/guide02.png';
import guide03 from '/public/images/guide/guide03.png';
import guide04 from '/public/images/guide/guide04.png';
import guide05_1 from '/public/images/guide/guide05_1.png';
import guide05_2 from '/public/images/guide/guide05_2.png';
import guide05_3 from '/public/images/guide/guide05_3.png';
import guide05_4 from '/public/images/guide/guide05_4.png';
import guide06 from '/public/images/guide/guide06.png';
import guide07 from '/public/images/guide/guide07.png';
import guide08 from '/public/images/guide/guide08.png';

export default function Next() {
  return (
    
    <div className="listWrap">
      <CodeHighlighter />
      <h2>Next.JS <p>(13버전기준)</p></h2>
      <ListSearch />
      <div>

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
          <h3>컴포넌트 만들기</h3>
          <div className="cont">
            <p>1. 컴포넌트 만들고 싶으면 우선 function을 만들고 작명합니다. 관습적으로 영어 대문자로 시작합니다.</p>
            <p>2. function의 return ( ) 안에 축약할 html을 담습니다.</p>
            <p>3. 원하는 곳에서 &#60;작명/&#62; 을 사용합니다. &#60;Header /&#62;</p>
            <p>그럼 그 자리에 return( ) 안에 있던 html들이 붙여넣어집니다.</p>
            <code className='code'>
            export default function Cart() &#123;<br/>
            &nbsp;&nbsp;return (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#60;div&#62;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Item /&#62;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#60;/div&#62;<br/>
            &nbsp;&nbsp;)<br/>
            &#125;<br/><br/>

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

{/* aaaaaaaaaaaaaa
<div className="list">
  <h3>aaaaaaaaaaaaaa</h3>
  <div className="cont">
    <p>ppppppppp</p>
    <code className='code'>cccccccc</code>
  </div>
</div>
 */}
        

      </div>
    </div>
  )
}
