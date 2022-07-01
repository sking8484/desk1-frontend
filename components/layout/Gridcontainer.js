import styles from './Gridcontainer.module.css'
export default function Gridcontainer(props) {
  return <div className = {styles.Gridcontainer}>
    {props.children}
  </div>
}