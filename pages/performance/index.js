import Gridcontainer from '../../components/layout/Gridcontainer'
import React from 'react';
import Dateform from '../../components/Forms/Dateform'
import getAllData from '../../utils/database/db-utils'
import Chart from '../../components/Charts/Chart'
import { homePerfSpec } from '../../components/Charts/Specs/Performance/indexSpec'
import { concatData, pivotData, changeToCumulative, indexToOne, sortTimeSeries, getCols } from '../../utils/data-utils'

export default function Performance(props) {

  let perfCumulative = changeToCumulative(props.perfData, 'value');
  var concatedData = concatData(props.factorData, perfCumulative)
  let pivotedData = pivotData(concatedData, 'date', 'symbol', 'value')
  let sortedData = sortTimeSeries(pivotedData, 'date');
  let indexed = indexToOne(sortedData, 'date');

  let cols = getCols(indexed, 'date');

  homePerfSpec.repeat = {"layer":cols}

  const [data, setData] = React.useState(indexed);

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
    for (var row in indexed) {
      var currRow = indexed[row];
      if (currRow['date'] > startDate && currRow['date'] < endDate) {
        newFilteredData.push(currRow);
      }
    }
    let newIndexed = indexToOne(newFilteredData, 'date');

    setData(newIndexed);
    console.log('rerendering2');
  }



  return <Gridcontainer>
      <Dateform submit = {submitDates}/>
      <Chart
        specObj = {homePerfSpec}
        dataObj = {{"data":data}}
        widthMult = {8/10}
        heightMult = {7/10}/>
    </Gridcontainer>
}

export async function getStaticProps(){
  let perfTable = 'perfTable';
  let factorTable = 'factorTable';
  let perfData = await getAllData(perfTable);
  let factorData = await getAllData(factorTable);

  return {
    props : {
      perfData, factorData
    }, revalidate:60*30
  }


}