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

  console.log(specObj.height);

  return (
    <VegaLite spec = {specObj} data = {dataObj} actions = {false} />
  )

}
