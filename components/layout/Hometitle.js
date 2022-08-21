import styles from './Hometitle.module.css'
import Link from 'next/link'
export default function Hometitle(props) {
  return (
    <div className = {styles.homeInfo}>
      <div className = {`large-title`}>
        DeskOne Trading
      </div>
      <div className = {`${styles.infoHeader} text`}>
        Democratizing Quantitative Finance
      </div>
    </div>
  )
}

