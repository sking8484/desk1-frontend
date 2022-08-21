import styles from "./Homeinfo.module.css"
import Infobox from './Infobox'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeInfo({title, text,secondText, image, positioning}) {
  return (
    <div className = {styles.info}>
      <div className = {positioning === 'left' ? styles.infoContainerLeft : styles.infoContainerRight}>
        {positioning === 'left' ?
        (<div className = {styles.textContainer}>
          <div className = 'large-title'>{title}</div>
          <div className = 'third-title'>{text}</div>
          <div classNamne = 'third-title'></div>
          <div classNamne = {styles.placeHolder}></div>
        </div>
        )
        :
        (<div className = {styles.textContainer}>
          <Image src = {image}/>
        </div>)}

        {positioning === 'left' ?
        (<div className = {styles.textContainer}>
          <Image src = {image}/>
        </div>
        )
        :
        (<div className = {styles.textContainer}>
          <div className = 'large-title'>{title}</div>
          <div className = 'third-title'>{text}</div>
          <div classNamne = 'third-title'></div>
          <div classNamne = {styles.placeHolder}></div>
        </div>)}


      </div>
    </div>

  )

}