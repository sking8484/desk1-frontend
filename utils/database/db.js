const SocksConnection = require('socksjs');
const mysql = require('mysql2/promise');
const fixieUrl = process.env.NEXT_PUBLIC_FIXIE_SOCKS_HOST;
const fixieValues = fixieUrl.split(new RegExp('[/(:\\/@)/]+'));

const mysqlServer = {
  host: process.env.NEXT_PUBLIC_DB_HOST,
  port: 3306
};

const dbUser = process.env.NEXT_PUBLIC_DB_USER;
const dbPassword = process.env.NEXT_PUBLIC_DB_PASSWORD;
const db = process.env.NEXT_PUBLIC_DB_DB;

const fixieConnection = new SocksConnection(mysqlServer, {
  user: fixieValues[0],
  pass: fixieValues[1],
  host: fixieValues[2],
  port: fixieValues[3],
});

export const mysqlConnPool = mysql.createPool({
  user: dbUser,
  password: dbPassword,
  database: db,
  stream: fixieConnection
});

export default async function executeQuery({connection, query, values}) {
  console.log("DOING THING")

  if (values) {
    let [results, fields] = await connection.query(query, values);
    connection.release();
    return results
  } else {
    let [results, fields] = await connection.query(query);
    connection.release();
    return results;
  }
}
