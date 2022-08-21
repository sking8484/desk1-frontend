import styles from './index.module.css'
import Hometitle from '../components/layout/Hometitle'
import Chart from '../components/Charts/Chart'
import spec from '../components/Charts/Specs/indexSpec'
import Homelatex from '../components/latex/Homelatex';
import React from 'react';
import whatIsDeskOne from '../public/whatIsD1.gif'




export default function Home() {



  return(
  <>
    <div className = {styles.homeContainer}>
      <div className = {styles.homeTitle}>
        <Hometitle />
      </div>
    </div>

  </>
  )
}
