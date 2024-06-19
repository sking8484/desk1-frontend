import React from 'react';
import Dateform from '../../components/Forms/Dateform'
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


      </>
  )
}

export async function getServerSideProps(){
  const db = require('../../utils/database/db')
  const db_utils = require('../../utils/database/db-utils')
  const conn = await db.mysqlConnPool.getConnection()
  let perfTable = 'TEST_PERF_TABLE';
  //let factorTable = 'factorTable';
  let perfData = await db_utils.getAllData(conn, perfTable);
  //let factorData = await getAllData(factorTable);



  let perfCumulative = changeToCumulative(perfData, 'value');
  //var concatedData = concatData(factorData, perfCumulative)
  let sortedData = sortTimeSeries(perfCumulative, 'date')
  sortedData = changeColumnNames(sortedData, 'symbol', COL_MAPS)
  let symbolsToKeep = Object.values(COL_MAPS)
  sortedData = sortedData.filter(v => symbolsToKeep.includes(v.symbol))

  let indexedData = indexToOne(sortedData, 'symbol','value')
  indexedData = indexedData.map(v => ({...v, 'date':v['date'].toISOString().slice(0,10)}))

  return {
    props : {
      indexedData,
      //allData,

    }
  }
}
