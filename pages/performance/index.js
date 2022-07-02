import Gridcontainer from '../../components/layout/Gridcontainer'
import React from 'react';
import Dateform from '../../components/Forms/Dateform'
import getAllData from '../../utils/database/db-utils'
import Chart from '../../components/Charts/Chart'
import { homePerfSpec } from '../../components/Charts/Specs/Performance/indexSpec'

export default function Performance(props) {

  const [dates, setDates] = React.useState({
    startDate : "",
    endDate : "" //new Date().toISOString().substring(0,10)
  })

  function submitDates() {
    event.preventDefault();
    var startDate = new Date(dates.startDate)
    var endDate = new Date(dates.endDate);

    if (dates.endDate === '') {
      endDate = new Date()
    }

    if (startDate.toString() === 'Invalid Date' || endDate.toString() === 'Invalid Date') {
      startDate = new Date('1970-01-01');
      endDate = new Date();
    }

    startDate = startDate.toISOString();
    endDate = endDate.toISOString();

    var startYear = parseInt(startDate.slice(0,4));
    var startMonth = parseInt(startDate.slice(5,7))
    var startDay = parseInt(startDate.slice(8,10));


    var endYear = parseInt(endDate.slice(0,4));
    var endMonth = parseInt(endDate.slice(5,7))
    var endDay = parseInt(endDate.slice(8,10));

    console.log(startDate);
    homePerfSpec.transform = [
      {"filter":
        {"field": "date", "range": [
          {"year": startYear, "month": startMonth, "date": startDay},
          {"year": 2023, "month": "feb", "date": 20}
        ]
      }
    }]
    setDates({
      startDate:"",
      endDate:""
    })
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
  console.log(homePerfSpec);
  return <Gridcontainer>
      <Dateform dates = {dates} linkDates = {linkDates} submit = {submitDates}/>
      <Chart
        specObj = {homePerfSpec}
        dataObj = {{"data":props.perfData}}
        widthMult = {8/10}
        heightMult = {7/10}/>
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