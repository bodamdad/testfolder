import Image from 'next/image';
import guide01 from '/public/guide/guide01.png';
import guide02 from '/public/guide/guide02.png';
import guide03 from '/public/guide/guide03.png';
import guide04 from '/public/guide/guide04.png';
import guide05_1 from '/public/guide/guide05_1.png';
import guide05_2 from '/public/guide/guide05_2.png';
import guide05_3 from '/public/guide/guide05_3.png';
import guide05_4 from '/public/guide/guide05_4.png';
import guide06 from '/public/guide/guide06.png';
import guide07 from '/public/guide/guide07.png';
import guide08 from '/public/guide/guide08.png';

export default function guide() {
  return (
    <div className="guide">

    <h4 class="title">ㅇㅇㅇ</h4>
        <ul className="list">
          <li></li>
          <li></li>
          <li></li>
        </ul>

    <h4 class="title">프로젝트 생성하기</h4>
      <ul className="list">
      <li>터미널에서 아래 문구 입력</li>
        <li>npx create-next-app@latest</li>
        <li></li>
      </ul>

      <h4 class="title">next 미리보기</h4>
      <ul className="list">
        <li>터미널에서 아래 문구 입력</li>
        <li>npm run dev</li>
      </ul>

      <h4 class="title">함수 복사</h4>
      <Image src={guide08} alt=""/>
      <ul className="list">
        <li>copy로 복사 후 수정 후 기존 set함수에 넣는 방식</li>
      </ul>

      <h4 class="title">useState</h4>
            <Image src={guide07} alt=""/>
      <ul className="list">
        <li>상단에 아래 문구 표시</li>
        <li>import &#123;useState&#125; from 'react'</li>
        <li>let [작명, set작명] = useState(변수에넣을값);</li>
        <li>일반 변수는 html 자동 재렌더링이 되지 않고 useState로는 자동 재렌더링이 됩니다.</li>
        <li>(재렌더링은 html을 지웠다가 다시 만든다는 소리입니다)</li>
        <li>작명시 변경함수는 작명앞에 set 붙이는게 관습</li>
      </ul>

      <h4 class="title">props</h4>
      <Image src={guide06} alt=""/>
      <ul className="list">
        <li>변수를 가져올대 사용(부모가 자식한테만 전달 가능)</li>
        <li>작명할때 변수명 그대로 사용하면 편함(좌우 같게)</li>
        <li></li>
      </ul>

      <h4 class="title">import / export 문법</h4>
      <Image src={guide05_1} alt=""/>
      <Image src={guide05_2} alt=""/>
      <Image src={guide05_3} alt=""/>
      <Image src={guide05_4} alt=""/>
      <ul className="list">
        <li>export default 변수함수명 쓰면 됩니다. 내보낸다는 뜻의 문법인데 내보내야 다른 파일에서 쓸 수 있음 </li>
        <li>다른 파일에서 export default 했던걸 가져다가 쓰고 싶으면 import 작명 from 파일경로 쓰면 됩니다.</li>
        <li>여러 변수나 함수를 export 하고 싶으면 export &#123; 변수1, 변수2 &#125; 합시다. </li>
      </ul>

      <h4 class="title">컴포넌트(component)</h4>
      <Image src={guide04} alt=""/>
      <ul className="list">
        <li>컨포넌트는 작명할때 대문자로 시작하는게 관습</li>
        <li>server component vs client component</li>
        <li>page.js, layout.js에서 만든 컴포넌트들은 server component</li>
        <li>server component는 html 안에 자바스크립트를 못 넣습니다. useState, useEffect, onClick 이런거 사용불가능합니다.</li>
        <li>컴포넌트 만들 때 페이지 맨 위에 <Pint color="blue" text="'use client'"></Pint>라는 코드를 넣으면 그 밑에 있는 모든 컴포넌트는 client component가 됩니다. </li>
        <li></li>
      </ul>

      <h4 class="title">링크</h4>
      <Image src={guide03} alt=""/>
      <ul className="list">
        <li>app폴더에 폴더하나 만들어서 함수명 지정</li>
        <li>해당 폴더에 page.js 만들고 소스입력</li>
      </ul>
      
      <h4 class="title">이미지</h4>
      <Image src={guide02} alt=""/>
      <ul className="list">
        <li>public에 이미지 넣고 이미지 불러오기</li>
        <li>외부 이미지 url 넣을시 html img태그 사용</li>
      </ul>
      
      <h4 class="title">반복문(map)</h4>
      <Image src={guide01} alt=""/>
      <ul className="list">
        <li>어레이 갯수만큼 반복됨</li>
        <li>반복문에서 사용되는 큰 태그에 key=&#123;i&#125;는 사용을 권장함</li>
        <li>위에 표시된 "a"는 어레이 값들이 알아서 차례대로 들어감</li>
      </ul>

    </div>
  )
}


function Pint(props){
  return(
    <span style={{ color : props.color, fontWeight : 'bold' }}>{props.text}</span>
  )
}