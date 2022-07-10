import Dateform from '../Forms/Dateform'
import styles from './ChartwithForm.module.css'
import Chart from './Chart'
import React from 'react'
import { indexToOne } from '../../utils/data-utils'

/*
requires props to be passes a data element that is time series,
  {'date':'',
   'symbol':'',
   'value':''}
*/

export default function ChartwithForm({data, spec, width, height}) {
  const [myData, setData] = React.useState(
    indexToOne(
      data.filter(
        v => new Date(v['date'])>=new Date('2020-01-01')
        ),
      'symbol','value'
      )
    );

  async function submitDates(event) {
    event.preventDefault();

    var startDate = new Date(event.target[0].value)
    var endDate = new Date(event.target[1].value);
    if (event.target[1].value === '') {
      endDate = new Date()
    }

    if (startDate.toString() === 'Invalid Date' || endDate.toString() === 'Invalid Date') {
      startDate = new Date('1970-01-01');
      endDate = new Date();
    }

    /*
    let indexedVal = [...indexed].filter(row => {
      return row.date > startDate && row.date < endDate;
    })
    */
    let newFilteredData = data.filter(row => {
      return new Date(row.date) > startDate && new Date(row.date) < endDate;
    })

    setData(indexToOne(newFilteredData, 'symbol','value'));
  }

  return (
    <div className = {styles.perfContainer}>
      <Dateform submit = {submitDates}/>
      <Chart
        specObj = {spec}
        dataObj = {{"data":myData}}
        widthMult = {width}
        heightMult = {height}
        key = {myData}/>
    </div>

  )
}