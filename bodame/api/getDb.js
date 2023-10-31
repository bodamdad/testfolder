import pool from 'asdf/lib/db.js';

const Home = ({ data }) => {
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export async function getServerSideProps() {
    const [rows] = await pool.execute('SELECT * FROM g5_write_bodam0001');
    return {
        props: {
            data: rows,
        },
    };
}

export default Home;