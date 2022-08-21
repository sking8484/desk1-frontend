import styles from './CarouselCard.module.css'
import Image from 'next/image'

export default function CarouselCard({img, title, description, link}) {
  return (
    <div className = {styles.card}>
      <div className = {styles.imgContainer}>
        <a href = {link}><Image layout = 'responsive' src = {img} className = {styles.carouselImg}/></a>
      </div>
      <div classname = {styles.body}>
        <div className = {styles.title}>
            {title}
          </div>
          <div className = {styles.description}>
            {description}
          </div>
      </div>
    </div>
  )
}