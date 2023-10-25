export default function Type() {
  return (
    <div className="listWrap">
      
      <h2>TypeScript</h2>
      <div>

        <div className="list">
          <h3>타입</h3>
          <div className="cont">
            <code><span className="purple">let</span> 이름 : <span className="yellow">string</span> = <span className="green">'kim'</span></code>
            <p>타입으로 쓸 수 있는 것들은 string, number, boolean, bigint, null, undefined,[], {} 등이 있습니다.  </p>
            
            <code><span className="purple">let</span> 이름 : <span className="yellow">string</span> | number = 'kim';</code>
            <p>이 변수에 여러가지 타입의 데이터가 들어올 수 있다면 | 기호를 이용해 or 연산자를 표현할 수 있습니다. 위 예제는 변수에 숫자 혹은 문자를 집어넣을 수 있게 됩니다.   </p>
            
            <code>
              <span className="purple">type</span> nameType = <span className="yellow">string</span> | <span className="yellow">number</span>;<br />
              <span className="purple">let</span> 이름 : nameType = <span className="green">'kim'</span>;
            </code>
            <p>type 키워드를 이용해 타입을 변수처럼 담아서 사용가능합니다.</p>

            <code>ffffffffffff</code>
            <p>dddddddddd </p>



          </div>
        </div>

        <div className="list">
          <h3>제목</h3>
          <div className="cont">
            <h4>제목</h4>
            <code>ffffffffffff</code>
            <p>dddddddddd </p>
          </div>
        </div>
        
        <div className="list">
          <h3>제목</h3>
          <div className="cont">
            <h4>제목</h4>
            <p>설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 </p>
            <code>function</code>
          </div>
        </div>

      </div>
    </div>
  )
}
