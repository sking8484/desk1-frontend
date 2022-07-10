import styles from './Dateform.module.css'
import React from 'react'
export default function Dateform(props) {

  const [formInput, setFormInput] = React.useState({
    startDate : "",
    endDate : "", //new Date().toISOString().substring(0,10),
    symbols:[]
  })

  const [symbolState, setSymbolState] = React.useState([]);

  function linkInput(event) {
    let { value, name, selectedOptions } = event.target;
    let options = Array.from(selectedOptions, option => option.value);

    if (name === 'symbols') {
      value = options;
    }
    setFormInput((prevDates) => {
      return {
        ...prevDates,
        [name]:value
      }
    })
  }

  let symbols = Array.from(new Set(props.data.map(v => v['symbol']))).sort()
  let symbolSelectors = symbols.map(symbol => (
    <option key = {symbol} value = {`${symbol}`}>{`${symbol}`}</option>
  ))
  symbolSelectors.unshift(<option key = {'All'} value = "All">All</option>)
  React.useEffect(() => (
    setSymbolState(symbolSelectors)
  ),[])
  return (
    <form className = {styles.formContainer} onSubmit = {formInput => props.submit(formInput)}>
      <div className = {styles.inputBoxes}>
        <input
          type = "text"
          id = "startDate"
          placeholder = "  start date: 1970-01-01"
          className = {styles.startDate}
          name = "startDate"
          value = {formInput.startDate}
          onChange = {linkInput}
        />
        <input
          type = "text"
          id = "endDate"
          placeholder = {`end date: ${new Date().toISOString().slice(0,10)}`}
          className = {styles.endDate}
          name = "endDate"
          value = {formInput.endDate}
          onChange = {linkInput}
        />
        <select
          defaultValue = {['All']}
          name = 'symbols'
          className = {styles.symbolSelector}
          selected = {formInput.symbols}
          onChange = {linkInput} multiple>
            {symbolState}
        </select>

      </div>
      <button className = {styles.dateButton}><div className = 'small-text'>Filter</div></button>
    </form>
  )
}