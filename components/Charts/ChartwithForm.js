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

export default function ChartwithForm({data, spec, width, height, shouldIndex, inputStart}) {
  console.log(data);
  const [myData, setData] = React.useState(
    shouldIndex ? indexToOne(data.filter(
      row => new Date(row['date']) >= new Date(inputStart || '2020-01-01')), 'symbol', 'value')
    : data.filter(
      row => new Date(row['date']) >= new Date(inputStart || '2020-01-01')
    )
  );
  async function submitInput(input) {
    console.log(input);

    var startDate = new Date(input['startDate'])

    var endDate = new Date(input['endDate']);
    var symbols = input['symbols']
    if (input['endDate'] === '') {
      endDate = new Date()
    }

    if (startDate.toString() === 'Invalid Date' || endDate.toString() === 'Invalid Date') {
      startDate = new Date(inputStart || '2020-01-01');
      endDate = new Date();
    }

    /*
    let indexedVal = [...indexed].filter(row => {
      return row.date > startDate && row.date < endDate;
    })
    */
    let newFilteredData = data.filter(row => {
      if (symbols.includes('All') || symbols.length === 0) {
        return new Date(row.date) >= startDate && new Date(row.date) <= endDate;
      } else {
        return new Date(row.date) >= startDate && new Date(row.date) <= endDate && symbols.includes(row.symbol);
      }

    })

    if (shouldIndex) {
      setData(indexToOne(newFilteredData, 'symbol','value'));
    } else {
      setData(newFilteredData);
    }

  }

  return (
    <div className = {styles.perfContainer}>
      <Dateform submit = {submitInput} data = {myData} startDate = {inputStart}/>
      <Chart
        specObj = {spec}
        dataObj = {{"data":myData}}
        widthMult = {width}
        heightMult = {height}
        key = {myData}/>
    </div>

  )
}