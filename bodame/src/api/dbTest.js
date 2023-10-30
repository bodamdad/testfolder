// dbTest.js
const mysql = require('mysql2/promise');

async function fetchData() {
    try {
        // Create a new connection
        const connection = await mysql.createConnection({
            host: 'bodam-e.com',
            user: 'ljlj123',
            password: 'Lj!13402413',
            database: 'bodame'
        });

        // Execute a query
        const [rows] = await connection.execute('SELECT * FROM ttest');

        // Log the rows
        console.log(rows);

        // Close the connection
        await connection.end();
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to fetch data
fetchData();
