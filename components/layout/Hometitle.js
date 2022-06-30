import styles from './Hometitle.module.css'

export default function Hometitle() {
  return <div className = {styles.homeInfo}>
    <div className = {`${styles.title} title`}>
      DeskOne Trading
    </div>
    <div className = {`${styles.infoHeader} second-title`}>
      A multi-dimensional approach to trading
    </div>
    <div className = {styles.info}>
      <a href = "https://cvxopt.org/index.html" className = 'third-title underline'>Quadratic Programming</a>
      <br/>
      <div className = 'text'>{"DeskOne's main engine for portfolio construction"}</div>
    </div>
  </div>
}