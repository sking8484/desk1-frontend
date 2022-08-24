
import Pagestarter from '../../components/layout/Pagestarter'
import StrategyInfo from '../../components/layout/StrategyInfo'
import React from 'react';

import lagrange from '../../public/lagrange.gif'
import network from '../../public/dogcatnetwork.gif'
import alpaca from '../../public/alpaca.gif'
import Xarrow from 'react-xarrows';
import styles from './index.module.css'


let dataInfoTitle = 'Retrieve Data'
let dataInfoText = 'Each day, our rebalancing process begins with data collection. Our universe is the S&P100, so we get updated pricing for each of those stocks. We also compile a number of economic variables (GDP, CPI, etc.) in order to give our algorithm a way to identify the current market enviornment.'

let networkInfoTitle = 'Price Predictions'
let networkInfoText1 = `Once we've recieved the data, we use a previously trained Recurrent Neural Network to make return predictions on each of the S&P100 companies.`
let networkInfoText2 = `At the end of each week, we take the new data that we've recieved through out the week and retrain the Neural Network. This way, the network continuously learns the current enviornment, and how it is different / similar to previous enviornments`


let optimizationTitle = 'Portfolio Optimization'
let optimizationText1 = 'We then pass the output of the Neural Network, along with a covariance matrix associated with the previous year daily price movements of the S&P100 stocks into our optimization program.'
let optimizationText2 = 'This program utilizes Quadratic Programming to find the set of weights that give an optimal risk-return trade off for a certain risk threshold.'

let optimizationText3 = 'We currently bound our weights between 0 and 10%, meaning no short-selling and no over concentration of a single security.'

export default function Home() {



  const dataInfo = {
    'id':'dataInfo',
    'title':dataInfoTitle,
    'text':[dataInfoText],
    'side':'left'
  }
  const netWorkInfo = {
    'id':'netWorkInfo',
    'title':networkInfoTitle,
    'text':[networkInfoText1, networkInfoText2],
    'side':'right'
  }
  const optimizationInfo = {
    'id':'optimizationInfo',
    'title':optimizationTitle,
    'text':[optimizationText1, optimizationText2,optimizationText3],
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
    <StrategyInfo info = {netWorkInfo}/>
    <StrategyInfo info = {optimizationInfo}/>
    <Xarrow start = 'dataInfo' end = 'netWorkInfo' startAnchor = 'bottom' endAnchor = 'top' color = '#002046' dashness = {true}/>
    <Xarrow start = 'netWorkInfo' end = 'optimizationInfo' startAnchor = 'bottom' endAnchor = 'top' color = '#002046' dashness = {true}/>

  </>
  )
}
