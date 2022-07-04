import styles from './Linebreak.module.css';
export default function Linebreak() {
  return (
    <div className = {styles.breakContainer}>
    <br/>
    <div className = {styles.Linebreak}></div>
    <br/>
    </div>
  )
}