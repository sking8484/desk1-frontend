// First Perf Chart

var homePerfSpec = {}

homePerfSpec.mark = 'line'
homePerfSpec.encoding = {
    "x":{
      "field":"date",
      "timeUnit":"yearmonthdate",
      'axis':{
        'title':'Date'
      }
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
    "tooltip":[
      {"field":"Date (Formatted)", 'title':'Date'},
      {"field":"symbol", 'title':"Symbol"},
      {"field":"value","format":".3", 'title':'Performance'}]
  }
homePerfSpec.transform=[{"calculate":"utcFormat(datum.date, '%b %d, %Y')","as":"Date (Formatted)"}]




homePerfSpec.data = {"name":"data"}
homePerfSpec.title = "Portfolio and Benchmarks"
homePerfSpec.config = {"legend": {"orient":"top-left"}}


export {homePerfSpec};

var factorPerfSpec = {...homePerfSpec}
factorPerfSpec.title = "Factors"
export {factorPerfSpec}