import styles from './index.module.css'
import Pagestarter from '../../components/layout/Pagestarter'
import Chart from '../../components/Charts/Chart'
import { getRecentVariancePredictions } from '../../utils/database/db-utils'
import { predictionsSpec } from '../../components/Charts/Specs/securities/indexSpec';

export default function Securities(props) {

  let pageDescription = {
    'title':"Securities",
    "description":[`Want to figure out why we hold a certain security? Do your research below`]}

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

  let currPreds = await getRecentVariancePredictions()
  console.log(currPreds);
  return {
    props: {
      currPreds
    }
  }
}