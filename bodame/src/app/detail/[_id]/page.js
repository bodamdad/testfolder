'use client'
export default function Detail(props) {

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>타이틀</h4>
      <p>게시판내용</p>
      <p>{props.params._id}</p>
    </div>
  );
}
