var homePerfSpec = {}
homePerfSpec.mark = 'line';

homePerfSpec.repeat = {"layer":[]}
homePerfSpec.spec = {
  "mark":"line",
  "encoding":{
    "x":{
      "field":"date",
      "timeUnit":"yearmonthdate",
    },
    "y":{
      "field":{"repeat":"layer"},
      "type":"quantitative",
      "scale":{"zero":false},
      "title":"Performance, Indexed to 1"
    },
    "color":{
      "datum":{"repeat":"layer"},
      "type":"nominal"
    },
    "tooltip":[{"field":"Date (Formatted)"},{"datum":{"repeat":"layer"}},{"field":{"repeat":"layer"}, "format":".3"}, ]
  },"transform":[{"calculate":"utcFormat(datum.date, '%b %d, %Y')","as":"Date (Formatted)"}]

}


homePerfSpec.data = {"name":"data"}



export {homePerfSpec};