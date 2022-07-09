import styles from "./Homeinfo.module.css"
import Infobox from './Infobox'

export default function Homeinfo() {
  const benchmarkIcon = 'chart'
  const benchmarkHeader = 'Low Cost Hedge Fund'
  const benchmarkDescription = `
    We are an S&P 100 benchmarked fund, charging 0.25% AUM per year. Scroll to the bottom
    to see performance since inception
  `

  const weightsIcon = 'brain';
  const weightsHeader = 'Quantitative Portfolio'
  const weightsDescription = `
    Quadratic Programming
    is our main engine, with plans to have a Neural Network
    output as a feed in to our optimization. See below for how we solve for portfolio weights
  `

  const dataIcon = 'data';
  const dataHeader = 'Factor/Data Exploration';
  const dataDescription = `We provide access to all the factors/data that we are using.
    Use the Navigation Bar (top of page) to explore these features
  `
  return (
    <div className = {styles.infoContainer}>
      <Infobox icon = {benchmarkIcon} header = {benchmarkHeader} description = {benchmarkDescription}/>
      <Infobox icon = {weightsIcon} header = {weightsHeader} description = {weightsDescription}/>
      <Infobox icon = {dataIcon} header = {dataHeader} description = {dataDescription}/>
    </div>
  )
}