var spec1 = {}

spec1.mark = 'line';
spec1.encoding = {
  "x":{"field":"date","timeUnit":"yearmonthdate"},
  "y":{"field":"indexedPerf","type":"quantitative", "axis":{"format":".0%"}, "scale":{"zero":false}}
}
spec1.transform = [{"calculate":"datum.value-(-1)", "as":"posVal"},{
  "window":[{"op":"product","field":"posVal", "as":"CumulativePerf"},
    {"op":"first_value","field":"CumulativePerf","as":"FirstIndexVal"}],
  "frame":[null,0]
},
{"calculate":"datum.CumulativePerf/datum.FirstIndexVal - 1", "as":"indexedPerf"}]
spec1.title = "DeskOne Cumuliative Performance"

spec1.data = {"name":"data"}

export default spec1