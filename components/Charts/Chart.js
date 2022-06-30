import {VegaLite} from 'react-vega';
import React from 'react';
import { Handler } from 'vega-tooltip';

export default function Chart({specObj, propsData, widthMult}) {
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
    widthMult = (8/10)*widthMult;
  }
  specObj = {
    ...specObj,
    width:(dimension.width*widthMult),
  }
  return (
    <VegaLite spec = {specObj} data = {propsData} actions = {false} />
  )

}
