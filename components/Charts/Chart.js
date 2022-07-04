import {VegaLite} from 'react-vega';
import React from 'react';
import { Handler } from 'vega-tooltip';

export default function Chart({specObj, dataObj, widthMult, heightMult}) {
  const [dimension, setDimensions] = React.useState({height:100,width:100});

  React.useEffect(() => {
    setDimensions({
      ...dimension,
      width:window.innerWidth,
      height:window.innerHeight
    })
    window.addEventListener('resize',() => {

      clearTimeout(timeOutFunctionId);
      var timeOutFunctionId = setTimeout(() => {
          setDimensions({
            ...dimension,
            width:window.innerWidth,
            height:window.innerHeight
          })
        },500
      )
    })
  }, [])

  if (dimension.width < 500) {
    widthMult = (5/10)*widthMult;

  }
  specObj = {
    ...specObj,
    width:(dimension.width*widthMult),
    height:(dimension.height*heightMult)
  }

  if ('config' in specObj) {
    let configObj = specObj['config'];
    if ('legend' in specObj) {
      let legendObj = configObj['legend']
      legendObj['orient'] = 'top-left'
    }
    configObj['legend'] = {'orient':"top-left"}
  }
  specObj['config'] = {"legend":{"orient":"top-left"}}

  console.log(specObj.height);

  return (
    <VegaLite spec = {specObj} data = {dataObj} actions = {false} />
  )

}
