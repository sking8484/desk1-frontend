import styles from './Dateform.module.css'

export default function Dateform(props) {
  return (
    <form className = {styles.formContainer} onSubmit = {props.submit}>
      <div className = {styles.inputBoxes}>
        <input
          type = "text"
          id = "startDate"
          placeholder = "  start date: 1970-01-01"
          className = {styles.startDate}
          name = "startDate"
          value = {props.dates.startDate}
          onChange = {props.linkDates}
        />
        <input
          type = "text"
          id = "endDate"
          placeholder = {`end date: ${new Date().toISOString().slice(0,10)}`}
          className = {styles.endDate}
          name = "endDate"
          value = {props.dates.endDate}
          onChange = {props.linkDates}
        />
      </div>
      <button className = {styles.dateButton}><div className = 'small-text'>Filter</div></button>
    </form>
  )
}