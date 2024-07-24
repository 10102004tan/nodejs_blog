const mysql = require('mysql2');

async function connect() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'f8_dev',
    });
    console.log('Connect mysql successfully!!!');
  } catch (err) {
    console.log('Connect mysql failure!!!');
  }
}

module.exports = { connect };
