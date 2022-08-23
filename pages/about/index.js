
import Pagestarter from '../../components/layout/Pagestarter'
import HomeInfo from '../../components/layout/Homeinfo'
import React from 'react';
import whatIsDeskOne from '../../public/whatIsD1.gif'
import lagrange from '../../public/lagrange.gif'
import network from '../../public/dogcatnetwork.gif'
import alpaca from '../../public/alpaca.gif'



export default function Home() {


  const firstTitle = 'What is DeskOne?'
  const firstText = 'DeskOne is a cloud based trading protocol that aims to give investors access to cutting edge Quantitative models.'

  const firstInfo = {
    'title':firstTitle,
    'text':[firstText, 'We rebalance daily, and take the S&P100 as our universe.'],
    'image':whatIsDeskOne,
    'positioning':'left'
  }
  const strategyTitle = 'Our Strategy'
  const strategyText1 = 'At the heart of our strategy is a mathematical optimization method called Quadratic Programming.'
  const strategyText2 = 'You can think of it as a way to find an optimal combination of assets given return predictions and variance / covariance predictions.'

  const secondInfo = {
    'title':strategyTitle,
    'text':[strategyText1,strategyText2],
    'image':lagrange,
    'positioning':'right'
  }

  const methodsTitle = 'Our Methods'
  const methodText1 = 'We currently utilize a type of Neural Network called an RNN (recurrent neural network) specifically designed to work with data that relies on previous time periods.'
  const methodText2 = 'We use the output of this network as a feed-in to the optimization algorithm noted in the above section.'


  const thirdInfo = {
    'title':methodsTitle,
    'text':[methodText1,methodText2],
    'image':network,
    'positioning':'left'
  }

  const implement2 = 'We only consider the positions currently listed in the S&P100. This universe gives us enough diversification, but only gives us expsure to the top 100 largest companies in the U.S.'
  const implement1 = 'DeskOne trades daily, and links directly to Alpaca Brokerage using the Python API.'
  const implemInfo = {
    'title':'Our Implementation',
    'text':[implement1, implement2],
    'image':alpaca,
    'positioning':'right'
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
    <HomeInfo info = {firstInfo}/>
    <HomeInfo info = {secondInfo}/>
    <HomeInfo info = {thirdInfo}/>

  </>
  )
}
