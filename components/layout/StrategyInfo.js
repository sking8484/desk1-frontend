import styles from './StrategyInfo.module.css'
import { useInView } from 'react-intersection-observer';

export default function StrategyInfo(props) {
  const {ref, inView, entry } = useInView({
    threshold: .1,
  })
  return (
    <div ref = {ref} className = {props.info.side === 'left' ? styles.strategyLeft : styles.strategyRight}>
      {props.info.side === 'left' ?
      (<>
        <div id = {props.info.id} className = {styles.strategyTitle}>{props.info.title}</div>
        <div className = {`${styles.strategyText} ${inView ? styles.fadeInRight : ""}`}>{props.info.text.map(text => <div key = {text[0]}>{text}</div>)}</div>
      </>)
      :
      (<>
        <div className = {`${styles.strategyText} ${inView ? styles.fadeInLeft : ""}`}>{props.info.text.map(text => <div key = {text[0]}>{text}</div>)}</div>
        <div id = {props.info.id} className = {styles.strategyTitle}>{props.info.title}</div>
        </>)
      }
    </div>
  )
}