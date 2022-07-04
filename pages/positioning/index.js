import styles from './index.module.css'
import Chart from '../../components/Charts/Chart'
import { indivSpec, sectorSpec } from '../../components/Charts/Specs/Positioning/indexSpec';
import { getRecentTimeSeries } from '../../utils/database/db-utils'
import Linebreak from '../../components/layout/Linebreak'
export default function Positioning(props) {
  return (<div className = {styles.posContainer}>
    <div className = {styles.weightChartContainer}>
      <Chart className = {styles.weightsChart} specObj = {indivSpec} dataObj = {{"data":props.weightsData}} widthMult = {8/10} heightMult = {7/10}/>
    </div>
    <Linebreak/>
    <div className = {styles.sectorWeightsContainer}>
      <Chart className = {styles.weightsChart} specObj = {sectorSpec} dataObj = {{"data":props.sectorData}} widthMult = {8/10} heightMult = {7/10}/>
    </div>
  </div>
  )
}

export async function getStaticProps() {
  var weightsTable = 'holdingsTable';
  var topDownWeightsTable = 'topDownWeights';

  let weightsData = await getRecentTimeSeries(weightsTable, 'date');
  let topDownData = await getRecentTimeSeries(topDownWeightsTable, 'date');

  let sectorData = topDownData.filter(v => v['descriptor'] === 'sector')

  return {
    props : {
      weightsData,
      sectorData
    }, revalidate:60*10
  }

}