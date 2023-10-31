export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getDb`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default function About({ data }) {
  return (

    <div className="list-bg">
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
    </div>



    // <div>
    //   {/* Render data */}
    //   {data.map(item => (
    //     <div key={item.id}>{item.name}{item.id}</div>
    //   ))}
    // </div>
  );
}
