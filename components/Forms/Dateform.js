import styles from './Dateform.module.css'
import React from 'react'
export default function Dateform(props) {

  const [dates, setDates] = React.useState({
    startDate : "",
    endDate : "" //new Date().toISOString().substring(0,10)
  })

  function linkDates(event) {
    const { value, name } = event.target;
    setDates((prevDates) => {
      return {
        ...prevDates,
        [name]:value
      }
    })
  }

  return (
    <form className = {styles.formContainer} onSubmit = {dates => props.submit(dates)}>
      <div className = {styles.inputBoxes}>
        <input
          type = "text"
          id = "startDate"
          placeholder = "  start date: 1970-01-01"
          className = {styles.startDate}
          name = "startDate"
          value = {dates.startDate}
          onChange = {linkDates}
        />
        <input
          type = "text"
          id = "endDate"
          placeholder = {`end date: ${new Date().toISOString().slice(0,10)}`}
          className = {styles.endDate}
          name = "endDate"
          value = {dates.endDate}
          onChange = {linkDates}
        />
      </div>
      <button className = {styles.dateButton}><div className = 'small-text'>Filter</div></button>
    </form>
  )
}