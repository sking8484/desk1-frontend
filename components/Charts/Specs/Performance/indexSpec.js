var homePerfSpec = {}
homePerfSpec.mark = 'line';

homePerfSpec.repeat = {"layer":[]}
homePerfSpec.spec = {
  "mark":"line",
  "encoding":{
    "x":{
      "field":"date",
      "timeUnit":"yearmonthdate"
    },
    "y":{
      "field":{"repeat":"layer"},
      "type":"quantitative",
      "scale":{"zero":false}
    },
    "color":{
      "datum":{"repeat":"layer"},
      "type":"nominal"
    }
  }
}


homePerfSpec.data = {"name":"data"}



export {homePerfSpec};