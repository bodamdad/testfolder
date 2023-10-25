import pool from '/db/database.js';

export default async function Faq() {

  let faq = [];

  try {
    const [faqData] = await pool.query('SELECT * FROM g5_faq;');
    faq = faqData;
  } catch (error) {
    console.log('error2')
    // faq.status(500).json({ error: error.message });
  }

  return (
    <nav>
      <ul>
        {faq.map(({fa_id, fa_subject, fa_content}) => (
          <li key={fa_id}>
            <span>{fa_id}</span><br/><br/>
            <span>{fa_subject}</span><br/><br/>
            <span>{fa_content}</span>
          </li>
        ))}
        <li>{faq[0].fa_content}</li>
      </ul>
    </nav>
  )
}
