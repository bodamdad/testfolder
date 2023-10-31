import { db } from "/lib/db";

export async function getServerSideProps() {
  const data = await db("g5_write_bodam0001").select("wr_id", "wr_seo_title", "wr_link1");

  return {
    props: { data },
  };
};

export default function Page({ data }) {
  return (
    <div>
        <p>asdf</p>
      {data.map(item => (
        <div key={item.wr_id}>
          <h2>{item.wr_seo_title}</h2>
          <a href={item.wr_link1}>Link</a>
        </div>
      ))}
    </div>
  )
}
