const SocksConnection = require('socksjs');
const mysql = require('mysql2/promise');
const fixieUrl = process.env.FIXIE_SOCKS_HOST;
const fixieValues = fixieUrl.split(new RegExp('[/(:\\/@)/]+'));

const mysqlServer = {
  host: process.env.DB_HOST,
  port: 3306
};

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const db = process.env.DB_DB;

const fixieConnection = new SocksConnection(mysqlServer, {
  user: fixieValues[0],
  pass: fixieValues[1],
  host: fixieValues[2],
  port: fixieValues[3],
});

const mysqlConnPool = mysql.createPool({
  user: dbUser,
  password: dbPassword,
  database: db,
  stream: fixieConnection
});

export default async function executeQuery({ query, values}) {
  console.log("DOING THING")
  results = await mysqlConnPool.getConnection(async function gotConnection(err, connection) {
    console.log(connection)

    if (err) throw err;

    if (values) {
      let results = await connection.query(query, values);
      connection.release();
      return results
    } else {
      let results = await connectionn.query(query);
      connection.release();
      return results;
    }
    return results
  }
  )
  return results
}
