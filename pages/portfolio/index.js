import styles from './index.module.css'
import Chart from '../../components/Charts/Chart'
import { indivSpec, sectorSpec, correlationsSpec } from '../../components/Charts/Specs/Portfolio/indexSpec';
import { getRecentTimeSeries } from '../../utils/database/db-utils'
import Linebreak from '../../components/layout/Linebreak'
import Pagestarter from '../../components/layout/Pagestarter'
import { getRecentVariancePredictions } from '../../utils/database/db-utils'
import { predictionsSpec } from '../../components/Charts/Specs/Portfolio/indexSpec';
export default function Positioning(props) {

  let pageDescription = {
    'title':"Portfolio",
    "description":[`What does our portfolio look like? Find weights, predictions and asset correlations below.
    `]}
  return (
    <>
      <Pagestarter pageInfo = {pageDescription}/>
      <div className = {styles.posContainer}>

        <div className = {styles.weightChartContainer}>
          <Chart className = {styles.weightsChart} specObj = {indivSpec} dataObj = {{"data":props.weightsData}} widthMult = {8/10} heightMult = {6/10}/>
        </div>
        <Linebreak/>
        <div className = {styles.predictionsContainer}>
          <Chart specObj = {predictionsSpec} dataObj = {{"data":props.currPreds}} widthMult = {8/10} heightMult = {6/10}/>
        </div>
        <Linebreak/>
        <div className = {styles.corrContainer}>
          <Chart specObj = {correlationsSpec} dataObj = {{'data':props.correlationsData}} widthMult = {7/10} heightMult = {6/10}/>
        </div>

      </div>
    </>
  )
}

export async function getServerSideProps() {
  var weightsTable = 'holdingsTable';
  let corrTable = 'correlationTable';
  let currPreds = await getRecentVariancePredictions()

  let weightsData = await getRecentTimeSeries(weightsTable, 'date');
  let correlationsData = await getRecentTimeSeries(corrTable, 'date');
  let currHoldings = weightsData.filter(v => v.value > 0).map(v => v.symbol);
  correlationsData = correlationsData.filter(v => currHoldings.includes(v.symbol) && currHoldings.includes(v.symbol2));

  return {
    props : {
      weightsData,
      currPreds,
      correlationsData
    }
  }

}