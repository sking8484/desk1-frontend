import styles from './Pagestarter.module.css'



export default function Pagestarter({pageInfo}) {
  /*
    pageInfo = {'title':'','description':'['desc1','desc2']}
  */

  const descriptions = pageInfo['description'].map(text => (
    <div className = {`${styles.description} third-title`}>
      {text}
    </div>
  ))

  return (
    <div className = {styles.container}>
      <div className = {`${styles.title} large-title`}>
        {pageInfo['title']}
      </div>
      {descriptions}
    </div>
  )
}