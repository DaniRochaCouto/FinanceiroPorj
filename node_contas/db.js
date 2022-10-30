const { randomUUID } = require('crypto');

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: 3308,
        user: 'test',
        password: 'test',
        database: 'ProjFinalBanco',
        multipleStatements: true
      } );
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectContas(){
    const conn = await connect();

    const query = `SELECT * FROM contas LIMIT 1000;`;
    console.log(`Executando query: ${query}`);

    const [rows, fields] = await conn.execute(query);
    console.log(`Rows: ${JSON.stringify(rows)}`);
    return rows;
}
module.exports = {selectContas};
