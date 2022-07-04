import executeQuery from './db'

export default async function getAllData(tableName) {
  const query = `SELECT * FROM ${tableName}`;
  var result = await executeQuery({query:query});
  return result.map(v => Object.assign({}, v));
}

export async function getRecentTimeSeries(tableName, dateCol) {
  const query = `SELECT * FROM ${tableName} WHERE ${dateCol} = (SELECT max(${dateCol}) FROM ${tableName})`;
  var result = await executeQuery({query:query});
  return result.map(v => Object.assign({}, v));
}

