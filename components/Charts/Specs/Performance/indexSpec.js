var homePerfSpec = {}
homePerfSpec.mark = 'line';
homePerfSpec.encoding = {
  "x":{"field":"date","timeUnit":"yearmonthdate"},
  "y":{"field":"value", "type":"quantitative"}
}

homePerfSpec.data = {"name":"data"}



export {homePerfSpec};