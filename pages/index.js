import styles from './index.module.css'
import Hometitle from '../components/layout/Hometitle'
import Chart from '../components/Charts/Chart'
import spec from '../components/Charts/Specs/indexSpec'
import Homelatex from '../components/latex/Homelatex';
import React from 'react';
import whatIsDeskOne from '../public/whatIsD1.gif'
import Carousel from '../components/Carousel/techCarousel'
import HomeInfo from '../components/layout/Homeinfo'


const firstTitle = 'What is DeskOne?'
const firstText = 'DeskOne is a cloud based trading protocol that aims to give investors access to cutting edge Quantitative models.'

const firstInfo = {
  'title':firstTitle,
  'text':[firstText, 'We rebalance daily, and take the S&P100 as our universe.'],
  'image':whatIsDeskOne,
  'positioning':'left',
  'boxId':'info1'
}


export default function Home() {



  return(
  <>
    <div className = {styles.homeContainer}>
      <div className = {styles.homeTitle}>
        <Hometitle />
      </div>
    </div>
    <HomeInfo info = {firstInfo}/>
    <Carousel/>

  </>
  )
}
