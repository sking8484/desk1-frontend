export function changeToCumulative(data, valueColumn) {
  // This function aims to turn a change series to
  // a cumulative series

  // data -> array of objects
  // valueColumn -> string, column to change

  var returnArray = [];
  for (var i = 0; i < data.length; i++) {
    var currObj = data[i];
    var newObj = {...currObj}

    if (i === 0) {
      newObj[valueColumn] = 1 + +currObj[valueColumn];
    } else {
      var prevObj = returnArray[i - 1];
      newObj[valueColumn] = (1 + +currObj[valueColumn]) * prevObj[valueColumn];
    }
    returnArray.push(newObj);
  }

  return returnArray;
}

export function concatData(data1, data2) {
  let concatedData = data1.concat(data2)
  return concatedData;
}

export function pivotData(data, pivotIndex, pivotColumn, pivotData) {
  // This function aims to pivot data from
  // tidy data (three columns (index:pivotIndex, identifier:pivotColumn, data:pivotData))
  // and changes this into time series like data
  var returnArray = [];
  let pivotObj = {};
  for (var i = 0; i < data.length; i++) {
    let currObj = data[i];
    let currIndex = currObj[pivotIndex];
    if (!(currIndex in pivotObj)) {
      pivotObj[currIndex] = {};
    }
    let currSymbol = currObj[pivotColumn];
    let currVal = +currObj[pivotData];
    pivotObj[currIndex][currSymbol] = currVal
  }

  for (var date in pivotObj) {
    var rowObj = {}
    rowObj[pivotIndex] = date
    var rowData = pivotObj[date];
    for (var key in rowData) {
      rowObj[key] = rowData[key];
    }
    returnArray.push(rowObj);
  }
  return returnArray;
}

export function sortTimeSeries(data, columnToSort) {
  // self explanatory
  var dateObjData = data.map(v => {
    let newObj = {...v
    }
    newObj[columnToSort] = new Date(v[columnToSort]);
    return newObj
  })
  var filterObj = dateObjData.sort((a,b) => {
    return a[columnToSort] < b[columnToSort];
  })
  return filterObj;
}

export function indexToOne(data, indexCol, valsToReplace) {
  // This function indexes the values of an object to 1
  var firstVals = {};
  var returnVals = [];
  for (var index in data) {

    var currObj = data[index];
    if (index > 0) {
      var prevOb = data[index - 1];
    }
    var rowObj = {...currObj};
    for (var colName in currObj) {
      if (colName !== indexCol){
        if (!(colName in firstVals)) {
          firstVals[colName] = currObj[colName];
        }
        rowObj[colName] = currObj[colName]/firstVals[colName];
        if (rowObj[colName] === 0) {
          rowObj[colName] = prevObj[colName]/firstVals[colName];
        }
      }
    }
    returnVals.push(rowObj);
  }
  return returnVals
}

export function getCols(data, colsToRemove) {
  // return the columns of an object
  var columns = [];
  for (var index in data) {
    var rowObj = data[index];
    for (var col in rowObj) {
      if (!(colsToRemove.includes(col))) {
        if (!(columns.includes(col))) {
          columns.push(col);
        }
      }
    }
  }
  return columns;
}

export function changeColumnNames(data, columnMaps) {
  let returnData = [];
  for (var i = 0; i < data.length; i++){
    let currRow = data[i];
    let newObj = {};
    let newCol = '';
    for (var colName in currRow) {
      if (colName in columnMaps) {
        newCol = columnMaps[colName];
      } else {
        newCol = colName;
      }
      newObj[newCol] = currRow[colName];
    }
    returnData.push(newObj);
  }
  return returnData;
}