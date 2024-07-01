import styles from './index.module.css'
import Hometitle from '../components/layout/Hometitle'
import Chart from '../components/Charts/Chart'
import spec from '../components/Charts/Specs/indexSpec'
import Homelatex from '../components/latex/Homelatex';
import React from 'react';
import Carousel from '../components/Carousel/techCarousel'
import HomeInfo from '../components/layout/Homeinfo'


const firstTitle = 'What is DeskOne?'
const firstText = 'DeskOne is a cloud based trading protocol that aims to give investors access to cutting edge Quantitative models.'

const firstInfo = {
  'title':firstTitle,
  'text':[firstText, 'We rebalance daily, and take the S&P100 as our universe.'],
  'image':'',
  'positioning':'left',
  'boxId':'info1'
}


export default function Home(props) {



  return(
  <>
    <div className = {styles.homeContainer}>
      <div className = {styles.homeTitle}>
        <Hometitle />
      </div>
    </div>
    <HomeInfo info = {firstInfo} stats = {props.stats_data}/>

  </>
  )
}

export async function getServerSideProps() {
  
  const db = require('../utils/database/db')
  const db_utils = require('../utils/database/db-utils')

  const conn = await db.mysqlConnPool.getConnection()
  var stats_table = 'TEST_STATS_TABLE';
  //let currPreds = await getRecentVariancePredictions()

  let stats_data = await db_utils.getRecentTimeSeries(conn, stats_table, 'date');
  console.log(stats_data)
  //let correlationsData = await getRecentTimeSeries(corrTable, 'date');
  //correlationsData = correlationsData.filter(v => currHoldings.includes(v.symbol) && currHoldings.includes(v.symbol2));

  return {
    props : {
      stats_data
      //currPreds,
      //correlationsData
    }
  }
       //<Linebreak/>
        //<div className = {styles.predictionsContainer}>
         // <Chart specObj = {predictionsSpec} dataObj = {{"data":props.currPreds}} widthMult = {8/10} heightMult = {6/10}/>
        //</div>
        //<Linebreak/>
        //<div className = {styles.corrContainer}>
          //<Chart specObj = {correlationsSpec} dataObj = {{'data':props.correlationsData}} widthMult = {7/10} heightMult = {6/10}/>
        //</div>

}
