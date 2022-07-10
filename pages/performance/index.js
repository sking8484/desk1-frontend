import React from 'react';
import Dateform from '../../components/Forms/Dateform'
import getAllData from '../../utils/database/db-utils'
import Chart from '../../components/Charts/Chart'
import { homePerfSpec } from '../../components/Charts/Specs/Performance/indexSpec'
import { concatData, pivotData, changeToCumulative, indexToOne, sortTimeSeries, getCols, changeColumnNames } from '../../utils/data-utils'
import styles from './index.module.css'
import Pagestarter from '../../components/layout/Pagestarter'
import ChartwithForm from '../../components/Charts/ChartwithForm'

let COL_MAPS = {
  "oilWTI":"Oil (West Texas)",
  "OEF":"SP100 Proxy (OEF)",
  "pct_change":"DeskOne Portfolio"
}

export default function Performance(props) {


  const pageInfo = {'title':"Relative Performance",
    "description":[
      `We're doing well, but how do we compare? Scroll down to explore`,
      `Data indexed to one from start date. This allows us to better compare two or more
      series by starting both from one`
      ]
    }


  return (
      <>
        <Pagestarter pageInfo = {pageInfo}/>
        <ChartwithForm data = {props.indexedData} spec = {homePerfSpec} width = {8/10} height = {(7)/10}/>
      </>

  )
}

export async function getServerSideProps(){
  let perfTable = 'perfTable';
  let factorTable = 'factorTable';
  let perfData = await getAllData(perfTable);
  let factorData = await getAllData(factorTable);
  var symbolsToKeep = ['OEF', 'oilWTI'];
  factorData = factorData.filter(v => symbolsToKeep.includes(v.symbol));

  let perfCumulative = changeToCumulative(perfData, 'value');
  var concatedData = concatData(factorData, perfCumulative)
  let sortedData = sortTimeSeries(concatedData, 'date')
  let indexedData = indexToOne(sortedData, 'symbol','value')
  indexedData = indexedData.map(v => ({...v, 'date':v['date'].toISOString().slice(0,10)}))

  indexedData = changeColumnNames(indexedData, 'symbol', COL_MAPS)
  return {
    props : {
      indexedData
    }
  }


}