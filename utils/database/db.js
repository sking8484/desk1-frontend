import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host:'162.243.170.65',
    database:'liveDatabase',
    user:'lebesgel',
    password:'h3MF$DLNag?QEF!s'
  }
});

export default async function executeQuery({ query, values}) {
  if (values) {
    let results = await db.query(query, values);
    await db.end();
    return await results.map(v => Object.assign({}, v));
  } else {
    let results = await db.query(query);
    await db.end();
    return await results.map(v => Object.assign({}, v));

  }
}
