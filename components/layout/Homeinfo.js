import styles from "./Homeinfo.module.css"
import Infobox from './Infobox'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeInfo(props) {
  return (
    <div className = {styles.info}>
      <div className = {props.info.positioning === 'left' ? styles.infoContainerLeft : styles.infoContainerRight}>
        {props.info.positioning === 'left' ?
        (<div className = {styles.textContainer}>
          <div id = {props.info.boxId}className = 'large-title'>{props.info.title}</div>
          {props.info.text.map(text =><div key = {text[0]} className = 'third-title'>{text}</div> )}
          <div classNamne = 'third-title'></div>
          <div classNamne = {styles.placeHolder}></div>
        </div>
        )
        :
        (<div className = {styles.textContainer}>
          <Image className = {styles.imageClass} src = {props.info.image}/>
        </div>)}

        {props.info.positioning === 'left' ?
        (<div className = {styles.imageOuterContainer}><div className = {styles.imageContainer}>
            <div className = {styles.textStuff}>
             <div className = 'large-title `${styles.textStuff}`'>
              {props.stats.returns_vs_index}%</div> <div className = 'text'>Rolling 1 Year returns vs SP500</div>
            </div>
            <div className = {styles.textStuff}>
             <div className = 'large-title `${styles.textStuff}`'>
              {props.stats.sharpe_ratio}</div> <div className = 'text'>Rolling 1 Year Sharpe Ratio</div>
            </div>
            <div className = {styles.textStuff}>
             <div className = 'large-title `${styles.textStuff}`'>
              {props.stats.mean_daily_risk}%</div> <div className = 'text'>Daily Risk</div> 
            </div>
            <div className = {styles.textStuff}>
             <div className = 'large-title `${styles.textStuff}`'>{props.stats.num_positions}
              </div> <div className = 'text'>Positions</div> 
            </div>
        </div>
        </div>
        )
        :
        (<div className = {styles.textContainer}>
          <div id = {props.info.boxId} className = 'large-title'>{props.info.title}</div>
          {props.info.text.map(text =><div key = {text[0]} className = 'third-title'>{text}</div> )}
          <div classNamne = 'third-title'></div>
          <div classNamne = {styles.placeHolder}></div>
        </div>)}


      </div>
    </div>

  )

}
