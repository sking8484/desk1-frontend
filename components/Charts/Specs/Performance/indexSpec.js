// First Perf Chart

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

// Mean Perf Chart

var meanPerfSpec = {}
meanPerfSpec.mark = {'type':"bar",'cornerRadius':5}
meanPerfSpec.encoding = {
  'x':{
    'field':'symbol',
    'type':'nominal',
    'sort':'-y',
    'axis':{
      'grid':'true',
      'labelAngle':0,
      'title':"Symbol"
    }
  },
  'y':{
    'field':'meanPerformance',
    'type':'quantitative',
    'axis':{
      'format':'0.2%',
      'title':'Performance'
    }
  }
}

meanPerfSpec.transform = [{
  'aggregate':[{
    'op':'mean',
    'field':'value',
    'as':'meanPerformance'
  }],'groupby':['symbol']
}]

meanPerfSpec.data = {'name':'data'}
meanPerfSpec.title = 'Mean Daily Performance'
export {meanPerfSpec}

// Variance Chart
var varPerfSpec = {}
varPerfSpec.mark = {'type':"bar",'cornerRadius':5}
varPerfSpec.encoding = {
  'x':{
    'field':'symbol',
    'type':'nominal',
    'sort':'-y',
    'axis':{
      'grid':'true',
      'labelAngle':0
    },
    'title':'Symbol'
  },
  'y':{
    'field':'perfVariance',
    'type':'quantitative',
    'axis':{
      'format':'0.2%'
    },
    'title':'Variance'
  }
}

varPerfSpec.transform = [{
  'aggregate':[{
    'op':'variance',
    'field':'value',
    'as':'perfVariance'
  }],'groupby':['symbol']
}]

varPerfSpec.data = {'name':'data'}
varPerfSpec.title = "Daily Variance"
export {varPerfSpec}