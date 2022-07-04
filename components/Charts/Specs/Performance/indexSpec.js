var homePerfSpec = {}



homePerfSpec.mark = 'line'
homePerfSpec.encoding = {
    "x":{
      "field":"date",
      "timeUnit":"yearmonthdate",
    },
    "y":{
      "field":"value",
      "type":"quantitative",
      "scale":{"zero":false},
      "title":"Performance, Indexed to 1"
    },
    "color":{
      "field":"symbol",
      "type":"nominal"
    },
    "tooltip":[{"field":"Date (Formatted)"}, {"field":"symbol"},{"field":"value","format":".3"} ]
  }
homePerfSpec.transform=[{"calculate":"utcFormat(datum.date, '%b %d, %Y')","as":"Date (Formatted)"}]




homePerfSpec.data = {"name":"data"}
homePerfSpec.config = {"legend": {"orient":"top-left"}}


export {homePerfSpec};