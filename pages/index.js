import styles from './index.module.css'
import Hometitle from '../components/layout/Hometitle'
import getAllData from '../utils/database/db-utils'
import Chart from '../components/Charts/Chart'
import spec from '../components/Charts/Specs/indexSpec'
import Homelatex from '../components/latex/Homelatex';
import HomeInfo from '../components/layout/Homeinfo'
import React from 'react';




export default function Home(props) {

  const equationRef = React.useRef(null);
  const infoRef = React.useRef(null);
  const perfRef = React.useRef(null);

  function executeScroll(refIdent) {
    if (refIdent === 'eq') {
      equationRef.current.scrollIntoView();
    } else if (refIdent === 'info') {
      infoRef.current.scrollIntoView();
    } else if (refIdent === 'perf') {
      perfRef.current.scrollIntoView();
    }
  }

  var width = (8/10);
  var height = (8/10);
  var data = {"data":props.data}

  return(
  <>
    <div className = {styles.homeContainer}>
      <div className = {styles.homeTitle}>
        <Hometitle scrollFunc = {executeScroll}/>
      </div>

    </div>
    <div ref = {infoRef}>
      <HomeInfo/>
    </div>
    <div className = {styles.latexContainer} ref = {equationRef}>
      <Homelatex/>
    </div>
    <div ref = {perfRef} className = {styles.homePerf}>
      <Chart specObj = {spec} dataObj = {data} widthMult = {width} heightMult = {height}/>
    </div>

  </>
  )
}


export async function getServerSideProps() {
  let tableName = "perfTable";
  let data = await getAllData(tableName);
  return {
    props : {
      data
    }
  }
}