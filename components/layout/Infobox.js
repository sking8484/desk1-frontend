import styles from "./Infobox.module.css"
import { faChartLine, faBrain, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Script from 'next/script';
export default function Infobox(props) {
  const iconMap = {
    'chart':faChartLine,
    'brain':faBrain,
    'data':faDatabase
  }

  return (
    <>

      <div className = {`${styles.boxContainer} large-title`}>
        <FontAwesomeIcon size = 'lg' icon = {iconMap[props.icon]} className = {styles.icon}/>
        <div className = {`${styles.header} third-title`}>
          {props.header}
        </div>
        <div className = 'small-text'>
          {props.description}
        </div>
      </div>
    </>
  )
}