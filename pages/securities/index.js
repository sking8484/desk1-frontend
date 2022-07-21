import styles from './index.module.css'
import Pagestarter from '../../components/layout/Pagestarter'
import Chart from '../../components/Charts/Chart'
import { getRecentTimeSeries } from '../../utils/database/db-utils'
import { predictionsSpec } from '../../components/Charts/Specs/securities/indexSpec';

export default function Securities(props) {

  let pageDescription = {
    'title':"Securities",
    "description":[`Want to figure out why we hold a certain security?`]}

    return (
      <>
        <Pagestarter pageInfo = {pageDescription}/>
        <div className = {styles.predictionChart}>
          <Chart specObj = {predictionsSpec} dataObj = {{"data":props.currPreds}} widthMult = {8/10} heightMult = {7/10}/>

        </div>

      </>
    )
}



export async function getServerSideProps() {
  var predictionsTable = 'predictionsTable';
  let currPreds = await getRecentTimeSeries(predictionsTable, 'date')
  return {
    props: {
      currPreds
    }
  }
}