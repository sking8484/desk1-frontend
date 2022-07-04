import React from 'react';
import Dateform from '../../components/Forms/Dateform'
import getAllData from '../../utils/database/db-utils'
import Chart from '../../components/Charts/Chart'
import { homePerfSpec } from '../../components/Charts/Specs/Performance/indexSpec'
import { concatData, pivotData, changeToCumulative, indexToOne, sortTimeSeries, getCols } from '../../utils/data-utils'
import styles from './index.module.css'
export default function Performance(props) {

  const [myData, setData] = React.useState(props.indexedData);


  React.useEffect(() => {
    let cols = getCols(props.indexedData, 'date');
    homePerfSpec.repeat = {"layer":cols}
  }, [])



  async function submitDates(event) {
    event.preventDefault();

    var startDate = new Date(event.target[0].value)
    var endDate = new Date(event.target[1].value);
    if (event.target[1].value === '') {
      endDate = new Date()
    }

    if (startDate.toString() === 'Invalid Date' || endDate.toString() === 'Invalid Date') {
      startDate = new Date('1970-01-01');
      endDate = new Date();
    }

    /*
    let indexedVal = [...indexed].filter(row => {
      return row.date > startDate && row.date < endDate;
    })
    */
    var newFilteredData = [];
    for (var row in props.indexedData) {
      var currRow = props.indexedData[row];
      var date = new Date(currRow['date']);
      if (date >= startDate && date < endDate) {
        newFilteredData.push(currRow);
      }
    }

    setData(indexToOne(newFilteredData, 'date'));
  }

  return (
      <div className = {styles.perfContainer}>
        <Dateform submit = {submitDates}/>
        <Chart
          specObj = {homePerfSpec}
          dataObj = {{"data":myData}}
          widthMult = {8/10}
          heightMult = {7/10}
          key = {myData}/>
      </div>

  )
}

export async function getStaticProps(){
  let perfTable = 'perfTable';
  let factorTable = 'factorTable';
  let perfData = await getAllData(perfTable);
  let factorData = await getAllData(factorTable);
  var symbolsToKeep = ['OEF', 'oilWTI'];
  factorData = factorData.filter(v => symbolsToKeep.includes(v.symbol));

  let perfCumulative = changeToCumulative(perfData, 'value');
  var concatedData = concatData(factorData, perfCumulative)
  let pivotedData = pivotData(concatedData, 'date', 'symbol', 'value')
  let sortedData = sortTimeSeries(pivotedData, 'date');
  let indexedData = indexToOne(sortedData, 'date');
  indexedData = indexedData.map(v => ({...v, 'date':v['date'].toISOString().slice(0,10)}))

  return {
    props : {
      indexedData
    }, revalidate:60*30
  }


}