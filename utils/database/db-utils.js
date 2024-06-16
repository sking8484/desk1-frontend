import executeQuery from './db'

export default async function getAllData(connection, tableName) {
  const query = `SELECT * FROM ${tableName}`;
  var result = await executeQuery({connection:connection, query:query});
  return result.map(v => Object.assign({}, v));
}

export async function getRecentTimeSeries(connection, tableName, dateCol) {
  const query = `SELECT * FROM ${tableName} WHERE ${dateCol} = (SELECT max(${dateCol}) FROM ${tableName})`;
  var result = await executeQuery({connection:connection, query:query});
  return result.map(v => Object.assign({}, v));
}

export async function getRecentVariancePredictions() {
  const query = `SELECT p.date, p.symbol, p.value as preds, v.value as variance
                FROM predictionsTable p inner join varianceTable v on p.symbol = v.symbol
                where p.date = (select max(p.date) from predictionsTable p)`
  var result = await executeQuery({query:query})
  return result.map(v => Object.assign({}, v))

}
