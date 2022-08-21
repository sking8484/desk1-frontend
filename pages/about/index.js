
import Pagestarter from '../../components/layout/Pagestarter'
import HomeInfo from '../../components/layout/Homeinfo'
import React from 'react';
import whatIsDeskOne from '../../public/whatIsD1.gif'




export default function Home() {


  const firstTitle = 'What is DeskOne?'
  const firstText = 'Investing in cutting-edge Quantitative financial models has been impossible for the average investor, until now.'

  const pageInfo = {'title':"Investing Is Hard.",
  "description":[
    `Most asset managers require an investment of more money than 95% of Americans have.`,
    `Even worse, investing in a quantitative fund is nearly impossible. The investment requirement is more money than 99.9% of Americans have, or the fund is so successfull that it is closed to additional investment.`
    ]
  }

  return(
  <>
    <Pagestarter pageInfo = {pageInfo}/>
    <HomeInfo title= {firstTitle} text = {firstText} image = {whatIsDeskOne}  positioning = {'left'}/>
  </>
  )
}
