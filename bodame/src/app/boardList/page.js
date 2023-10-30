export async function getServerSideProps() {
  const res = await fetch('../../api/getDb');
  const data = await res.json();

  if (!data || data.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default function BoardBodamList({data}) {

  return (
    <div>
      {Array.isArray(data) && data.map(user => (
        <div key={user.wr_id}>
          <p>ID: {user.wr_seo_title}</p>
          <p>Name: {user.wr_link1}</p>
        </div>
      ))}
      
      <div>
            <p>ID:  </p>
      </div>
    </div>
  );
}
