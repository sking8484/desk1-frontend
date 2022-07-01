import Gridcontainer from '../../components/layout/Gridcontainer'
import React from 'react';
import Dateform from '../../components/Forms/Dateform'
import getAllData from '../../utils/database/db-utils'
import Chart from '../../components/Charts/Chart'


export default function Performance(props) {
  console.log(props.perfData)
  const [dates, setDates] = React.useState({
    startDate : "",
    endDate : "" //new Date().toISOString().substring(0,10)
  })

  function submitDates() {
    event.preventDefault();
    console.log(dates)
  }

  function linkDates(event) {
    const { value, name } = event.target;
    setDates((prevDates) => {
      return {
        ...prevDates,
        [name]:value
      }
    })
  }

  return <Gridcontainer>
      <Dateform dates = {dates} linkDates = {linkDates} submit = {submitDates}/>
      <div className = 'text'>World</div>
    </Gridcontainer>
}

export async function getStaticProps(){
  let perfTable = 'perfTable';
  let factorTable = '';
  let perfData = await getAllData(perfTable);

  return {
    props : {
      perfData
    }, revalidate:60*30
  }


}