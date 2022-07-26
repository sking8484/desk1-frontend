import React from 'react';
import Dateform from '../../components/Forms/Dateform'
import getAllData from '../../utils/database/db-utils'
import Chart from '../../components/Charts/Chart'
import Linebreak from '../../components/layout/Linebreak'
import { homePerfSpec, factorPerfSpec } from '../../components/Charts/Specs/Performance/indexSpec'
import { makeStationary, concatData, pivotData, changeToCumulative, indexToOne, sortTimeSeries, getCols, changeColumnNames } from '../../utils/data-utils'
import styles from './index.module.css'
import Pagestarter from '../../components/layout/Pagestarter'
import ChartwithForm from '../../components/Charts/ChartwithForm'

let COL_MAPS = {
  "SPY":"S&P500 (SPY)",
  "OEF":"S&P100 (OEF)",
  "URTH":"MSCI World (URTH)",
  "pct_change":"DeskOne Portfolio"
}

export default function Performance(props) {


  const pageInfo = {'title':"Performance",
    "description":[
      `We're doing well, but how do we compare? Scroll down to explore`,
      `Data indexed to one from start date. This allows us to better compare two or more
      series by starting both from one`
      ]
    }


  return (
      <>
        <Pagestarter pageInfo = {pageInfo}/>
        <div className = {styles.charts}>
          <ChartwithForm data = {props.indexedData} spec = {homePerfSpec} width = {8/10} height = {(7)/10} shouldIndex = {true} inputStart = {'2022-06-21'}/>
        </div>
        <Linebreak></Linebreak>
        <div className = {styles.charts}>
          <ChartwithForm data = {props.allData} spec = {factorPerfSpec} width = {8/10} height = {(7)/10} shouldIndex = {true} inputStart = {'2022-01-01'}/>
        </div>
      </>
  )
}

export async function getServerSideProps(){
  let perfTable = 'perfTable';
  let factorTable = 'factorTable';
  let perfData = await getAllData(perfTable);
  let factorData = await getAllData(factorTable);


  let perfCumulative = changeToCumulative(perfData, 'value');
  var concatedData = concatData(factorData, perfCumulative)
  let sortedData = sortTimeSeries(concatedData, 'date')

  let indexedData = indexToOne(sortedData, 'symbol','value')
  indexedData = indexedData.map(v => ({...v, 'date':v['date'].toISOString().slice(0,10)}))

  indexedData = changeColumnNames(indexedData, 'symbol', COL_MAPS)
  let allData = indexedData
  let symbolsToKeep = Object.values(COL_MAPS)
  indexedData = indexedData.filter(v => symbolsToKeep.includes(v.symbol))

  // factorData = factorData.filter(v => symbolsToKeep.includes(v.symbol));
  return {
    props : {
      indexedData,
      allData
    }
  }
}