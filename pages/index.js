import styles from './index.module.css'
import Hometitle from '../components/layout/Hometitle'
import getAllData from '../utils/database/db-utils'
import Chart from '../components/Charts/Chart'
import spec from '../components/Charts/Specs/indexSpec'
import Homelatex from '../components/latex/Homelatex';




export default function Home(props) {

  var width = (8/10)*(7/10);
  var height = (8/10)*(8/10);
  var data = {"data":props.data}

  return(
  <>
  <div className = {styles.homeContainer}>
    <div className = {styles.homeTitle}>
      <Hometitle/>
    </div>
    <div className = {styles.homePerf}>
      <Chart specObj = {spec} dataObj = {data} widthMult = {width} heightMult = {height}/>
    </div>
  </div>
  <Homelatex/>

  </>
  )
}


export async function getStaticProps() {
  let tableName = "perfTable";
  let data = await getAllData(tableName);
  return {
    props : {
      data
    }, revalidate:60*10
  }
}