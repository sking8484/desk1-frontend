import executeQuery from './db'

export default async function getAllData(tableName) {
  const query = `SELECT * FROM ${tableName}`;
  var result = await executeQuery({query:query});
  return result;
}