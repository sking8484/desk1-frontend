var spec1 = {}

spec1.mark = 'line';
spec1.encoding = {
  "x":{"field":"date","timeUnit":"yearmonthdate", "scale":{"domain":{"param":"brush"}}, "axis":{"title":""}},
  "y":{"field":"Cumulative-Perf","type":"quantitative", "axis":{"format":".0%"}}
}
spec1.transform = [{
  "window":[{"op":"sum","field":"value", "as":"Cumulative-Perf"}],
  "frame":[null,0]
}]
spec1.title = "DeskOne Cumuliative Performance"


var spec2 = {}
spec2.mark = "line"
spec2.height = 50
spec2.selection = {
  "brush":{"type":"interval","encodings":['x']}
}
spec2.encoding = {
  "x":{"field":"date","timeUnit":"yearmonthdate"},
  "y":{"field":"value","type":"quantitative", "axis":{"format":".0%", "title":"Percentage Change"}}
}
var multPlot = {"vconcat":[spec1]}
multPlot.data = {"name":"data"}
multPlot['vconcat'].push(spec2)

export default multPlot