import pool from '/db/database.js';
import styles from './BoardBodamList.css'

export default async function BoardBodamList() {

  let boardBodamList = [];
  const date = new Date();
  try {
    const [boardBodamListData] = await pool.query('SELECT * FROM g5_write_bodam0001;');
    boardBodamList = boardBodamListData;
  } catch (error) {
    console.log('error2')
    // faq.status(500).json({ error: error.message });
  }

  console.log('ffffff')


  if (boardBodamList.length === 0) return <div>Loading...</div>;

  return (
    <div className='boardBodamList'>
      <div className='boardTopInfo'>
        <p>
          Total <span>201</span> / <span>1</span> Page
        </p>
        <p>
          <button>1</button>
          <button>2</button>
        </p>
      </div>
      <div className='boardList'>
        <ul>

        {boardBodamList.map(({ca_name, wr_subject, wr_datetime, wr_name}) => (
          <li>
            <a href="">
                <p className='imgWrap'><img src="https://bodam-e.com/data/editor/2310/thumb-8e50c65bd2b7ace1cd4142b88fa78d78_1697679346_6036_400x300.jpg" /></p>
                <div className='textWrap'>
                  <p className='text01'>
                    <span>{ca_name}</span>
                    <span>{wr_subject}</span>
                  </p>
                  <p className='text02'>
                    <span>{new Date(wr_datetime).toLocaleString()}</span>
                    <span>{wr_name}</span>
                  </p>
                </div>
            </a>
          </li>
        ))}

        </ul>
      </div>
    </div>
  )
}
