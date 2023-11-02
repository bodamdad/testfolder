export default function Detail(props) {
  return (
    <div className="list-bg">
      <h1>타이틀</h1>
      <p>콘텐츠</p>
      {props.params.no}
    </div>
  );
}
