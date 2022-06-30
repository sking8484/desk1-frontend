var spec1 = {}

spec1.mark = 'line';
spec1.encoding = {
  "x":{"field":"date","timeUnit":"yearmonthdate"},
  "y":{"field":"Cumulative-Perf","type":"quantitative", "axis":{"format":".0%"}}
}
spec1.transform = [{
  "window":[{"op":"sum","field":"value", "as":"Cumulative-Perf"}],
  "frame":[null,0]
}]
spec1.title = "DeskOne Cumuliative Performance"

spec1.data = {"name":"data"}

export default spec1