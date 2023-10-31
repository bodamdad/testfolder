import pool from '/lib/db.js';

export default function BoardBodamList({data}) {
  

  return (
    <div>
      <p>component</p>
      {data.map(item => (
        <div key={item.wr_id}>
          <p>ID: {item.wr_seo_title}</p>
          <p>Name: {item.wr_link1}</p>
        </div>
      ))}
    </div>
    
  );
}


export async function getServerSideProps() {
  const [rows] = await pool.execute('SELECT * FROM g5_write_bodam0001');
  return {
      props: {
          data: rows,
      },
  };
}
