import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './techCarousel.module.css'
import CarouselCard from './CarouselCard'
import mySQLImg from '../../public/mySQLcarousel.jpeg'
import tfCarousel from '../../public/tfCarousel.jpeg'
import iexCloudImg from '../../public/iexCloudImg.png'
import cvxoptImg from '../../public/cvxoptImg.jpeg'
import alpacaMarkets from '../../public/alpacaMarkets.png'
import digOcean from '../../public/digOcean.jpeg'

export default function CarouselComponent (){
  const getConfigurableProps = () => ({

    autoPlay: true,
    infiniteLoop:true,
    showArrows: true,
    showStatus: true,
    showIndicators: true,

});
  return (
    <div className = {styles.carouselContainer}>
      <div className = 'large-title'>Our Technologies</div>
      <Carousel {...getConfigurableProps()} centerMode = {true} centerSlidePercentage = {15}>
        <CarouselCard img = {mySQLImg} title = {'MySQL'} description = {''} link = {'https://www.mysql.com/'}/>
        <CarouselCard img = {tfCarousel} title = {'TensorFlow'} description = {''} link = {'https://www.mysql.com/'}/>
        <CarouselCard img = {iexCloudImg} title = {'IEXCloud'} description = {''} link = {'https://iexcloud.io/'}/>
        <CarouselCard img = {cvxoptImg} title = {'Convex Optimization'} description = {''} link = {'https://cvxopt.org/'}/>
        <CarouselCard img = {alpacaMarkets} title = {'Alpaca Markets'} description = {''} link = {'https://alpaca.markets/'}/>
        <CarouselCard img = {digOcean} title = {'Digital Ocean'} description = {''} link = {'https://www.digitalocean.com/'}/>
      </Carousel>
    </div>
  )
  }