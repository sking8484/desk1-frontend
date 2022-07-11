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
      'title':"Symbol",
    }
  },
  'y':{
    'field':'meanPerformance',
    'type':'quantitative',
    'axis':{
      'format':'0.2%',
      'title':'Performance'
    }
  },
  'color':{'value':'#002046'}
}

meanPerfSpec.transform = [{
  'aggregate':[{
    'op':'mean',
    'field':'value',
    'as':'meanPerformance'
  }],'groupby':['symbol']
}]

meanPerfSpec.data = {'name':'data'}
meanPerfSpec.title = {'text':'Mean Daily Performance'}
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
      'labelAngle':0,
      'color':'#002046'
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
  },
  'color':{'value':'#002046'}
}

varPerfSpec.transform = [{
  'aggregate':[{
    'op':'variance',
    'field':'value',
    'as':'perfVariance'
  }],'groupby':['symbol']
}]

varPerfSpec.data = {'name':'data'}
varPerfSpec.title = {'text':"Daily Variance"}
export {varPerfSpec}