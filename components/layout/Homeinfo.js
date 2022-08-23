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
          <div className = 'large-title'>{props.info.title}</div>
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
        (<div className = {styles.textContainer}>
          <Image className = {styles.imageClass} src = {props.info.image}/>
        </div>
        )
        :
        (<div className = {styles.textContainer}>
          <div className = 'large-title'>{props.info.title}</div>
          {props.info.text.map(text =><div key = {text[0]} className = 'third-title'>{text}</div> )}
          <div classNamne = 'third-title'></div>
          <div classNamne = {styles.placeHolder}></div>
        </div>)}


      </div>
    </div>

  )

}