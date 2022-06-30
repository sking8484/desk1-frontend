import styles from './index.module.css'
import Hometitle from '../components/layout/Hometitle'
import getAllData from '../utils/database/db-utils'
import Chart from '../components/Chart'
import spec from '../components/Charts/Specs/indexSpec'

export default function Home(props) {

  var width = (8/10)*(7/10);
  var data = {"data":props.data}

  return <div className = {styles.homeContainer}>
    <div className = {styles.homeTitle}>
      <Hometitle/>
    </div>
    <div className = {styles.homePerf}>
      <Chart specObj = {spec} propsData = {data} widthMult = {width}/>
    </div>
  </div>
}


export async function getStaticProps() {
  let tableName = "perfTable";
  let data = await getAllData(tableName);
  return {
    props : {
      data
    }
  }
}