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
             <div className = 'large-title'>
              26%</div> <div className = 'text'>Year to date returns </div>
            </div>
            <div className = {styles.textStuff}>
             <div className = 'large-title'>
              6%</div> <div className = 'text'>Year to date returns </div>
            </div>
            <div className = {styles.textStuff}>
             <div className = 'large-title'>
              18%</div> <div className = 'text'>Year to date returns </div> 
            </div>
            <div className = {styles.textStuff}>
             <div className = 'large-title `${styles.textStuff}`'>
              260%</div> <div className = 'text'>Year to date returns </div> 
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
