
import Pagestarter from '../../components/layout/Pagestarter'
import StrategyInfo from '../../components/layout/StrategyInfo'
import React from 'react';

import lagrange from '../../public/lagrange.gif'
import network from '../../public/dogcatnetwork.gif'
import alpaca from '../../public/alpaca.gif'
import Xarrow from 'react-xarrows';
import styles from './index.module.css'

export default function Home() {



  const dataInfo = {
    'id':'dataInfo',
    'title':'Data',
    'text':'Our DataOur DataOur DataOur DataOur DataOur DataOur Data',
    'side':'left'
  }
  const dataInfo1 = {
    'id':'dataInfo1',
    'title':'Data',
    'text':'Our DataOur DataOur DataOur DataOur DataOur DataOur DataOur DataOur DataOur DataOur DataOur DataOur DataOur Data',
    'side':'right'
  }
  const dataInfo2 = {
    'id':'dataInfo2',
    'title':'Data',
    'text':'Our Data',
    'side':'left'
  }

  const pageInfo = {'title':"Investing Is Hard.",
  "description":[
    `Most asset managers require an investment of more money than 95% of Americans have.`,
    `Even worse, investing in a quantitative fund is nearly impossible. The investment requirement is more money than 99.9% of Americans have, or the fund is so successfull that it is closed to additional investment.`
    ]
  }



  return(
  <>
    <Pagestarter pageInfo = {pageInfo}/>
    <div className = {`${styles.Intro} large-title`}>Trading Pipeline</div>
    <StrategyInfo info = {dataInfo}/>
    <StrategyInfo info = {dataInfo1}/>
    <StrategyInfo info = {dataInfo2}/>
    <Xarrow start = 'dataInfo' end = 'dataInfo1' startAnchor = 'bottom' endAnchor = 'top' color = '#002046' dashness = {true}/>
    <Xarrow start = 'dataInfo1' end = 'dataInfo2' startAnchor = 'bottom' endAnchor = 'top' color = '#002046' dashness = {true}/>

  </>
  )
}
