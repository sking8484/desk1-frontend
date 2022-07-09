import styles from './Hometitle.module.css'
import Link from 'next/link'
export default function Hometitle(props) {
  return (
    <div className = {styles.homeInfo}>
      <div className = {`large-title`}>
        DeskOne Trading
      </div>
      <div className = {`${styles.infoHeader} text`}>
        A multi-dimensional approach to trading.
      </div>
      <div className = {styles.scrollList}>
        <p className = 'text-link' onClick = {() => props.scrollFunc('info')}>What is DeskOne?</p>
        <p className = 'text-link' onClick = {() => props.scrollFunc('perf')}>Our Performance</p>
        <p className = 'text-link' onClick = {() => props.scrollFunc('eq')}>Our Equation</p>
      </div>
    </div>
  )
}

