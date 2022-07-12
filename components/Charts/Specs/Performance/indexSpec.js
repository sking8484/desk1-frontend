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
homePerfSpec.config = {"legend": {"orient":"top-left"}}


export {homePerfSpec};

// Mean Perf Chart

var meanPerfSpec = {}
meanPerfSpec.mark = {'type':"bar",'cornerRadius':5}
meanPerfSpec.encoding = {
  'x':{
    'field':'fsymbol',
    'type':'nominal',
    'sort':'-y',
    'axis':{
      'grid':'true',
      'labelAngle':0,
      'title':false,
    }
  },
  'y':{
    'field':'meanPerformance',
    'type':'quantitative',
    'axis':{
      'format':'0.2%',
      'title':false
    }
  },
  'color':{'value':'#002046'},
  'tooltip':[{'field':'meanPerformance','format':'0.2%','title':'Daily Performance'}]
}

meanPerfSpec.transform = [
{'calculate':"split(datum.symbol, ' ')", 'as':'fsymbol'},
{
  'aggregate':[{
    'op':'mean',
    'field':'value',
    'as':'meanPerformance'
  }],'groupby':['fsymbol']
}]

meanPerfSpec.data = {'name':'data'}
meanPerfSpec.title = {'text':'Mean Daily Performance'}
export {meanPerfSpec}

// Variance Chart
var varPerfSpec = {}
varPerfSpec.mark = {'type':"bar",'cornerRadius':5}
varPerfSpec.encoding = {
  'x':{
    'field':'fsymbol',
    'type':'nominal',
    'sort':'-y',
    'axis':{
      'grid':'true',
      'labelAngle':0,
      'color':'#002046',

    },
    'title':false
  },
  'y':{
    'field':'perfVariance',
    'type':'quantitative',
    'axis':{
      'format':'0.2%'
    },
    'title':false
  },
  'color':{'value':'#002046'},
  'tooltip':[{'field':'perfVariance', 'format':'0.2%', 'title':'Variance'}]
}

varPerfSpec.transform = [
  {'calculate':"split(datum.symbol, ' ')", 'as':'fsymbol'},
  {
  'aggregate':[{
    'op':'variance',
    'field':'value',
    'as':'perfVariance'
  }],'groupby':['fsymbol']
}]

varPerfSpec.data = {'name':'data'}
varPerfSpec.title = {'text':"Daily Variance"}
export {varPerfSpec}