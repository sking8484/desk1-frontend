import styles from './Dateform.module.css'
import React from 'react'
import Select from 'react-select'

export default function Dateform(props) {

  const [formInput, setFormInput] = React.useState({
    startDate : "",
    endDate : "", //new Date().toISOString().substring(0,10),
    symbols:[]
  })

  const [symbolState, setSymbolState] = React.useState([]);

  function linkInput(event) {
    var value = '';
    var name = '';
    if (Array.isArray(event)) {
      value = event.map(v => v.value);
      name = 'symbols'
    } else {
      value = event.target.value;
      name = event.target.name;
    }

    setFormInput((prevDates) => {
      return {
        ...prevDates,
        [name]:value
      }
    })
  }

  let symbols = Array.from(new Set(props.data.map(v => v['symbol']))).sort()
  symbols.unshift("All")

  let options = symbols.map(symbol => ({
    value:symbol,
    label:symbol
  }))


  React.useEffect(() => (
    setSymbolState(options)
  ),[])

  function filterForm(event) {
    event.preventDefault();
    props.submit(formInput);
  }

    const customStyles = {
      control: provided => ({
        ...provided,
        height:"4.2vh",
        maxHeight:'4.2vh',
        minHeight:'4.2vh',

      }),
      valueContainer: provided => ({
        ...provided,
        height:"4vh",
        maxHeight:"4vh",
        overflowY:'scroll',
        minHeight:'4vh'
      }),
      indicatorsContainer:provided => ({
        ...provided,
        height:"4vh",
        maxHeight:"4vh",
        minHeight:"4vh"
      }),
      input:provided => ({
        ...provided,
        margin:'0px',
        height:'4vh',
        maxHeight:'4vh',
        minHeight:"4vh"
      })

    }


  return (
    <form className = {styles.formContainer} onSubmit = {filterForm}>
      <div className = {styles.inputBoxes}>
        <div className = {styles.dateBoxes}>
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
        </div>
        <Select
          options = {symbolState}
          instanceId = '2033150unique'
          name = 'symbols'
          isMulti
          styles = {customStyles}
          onChange = {linkInput}
          className = {styles.selectBox}

        />
      </div>
      <button className = {styles.dateButton}><div className = 'small-text'>Filter</div></button>
    </form>
  )
}