var spec1 = {}

spec1.mark = {
  "type":"area",
  "line":{
    "color":"#014f86"
  },
  "color": {
    "x1": 1,
    "y1": 1,
    "x2": 1,
    "y2": 0,
    "gradient": "linear",
    "stops": [
      {
        "offset": 0,
        "color": "white"
      },
      {
        "offset": 1,
        "color": "#014f86"
      }
    ]
  }
}
spec1.encoding = {
  "x":{"field":"date","timeUnit":"yearmonthdate"},
  "y":{"field":"indexedPerf","type":"quantitative", "axis":{"format":".0%"}, "scale":{"zero":false}},
  "tooltip":[{"field":"Date (Formatted)"},{"field":"indexedPerf", "format":".2%"}],




}
spec1.transform = [{"calculate":"datum.value-(-1)", "as":"posVal"},{
  "window":[{"op":"product","field":"posVal", "as":"CumulativePerf"},
    {"op":"first_value","field":"CumulativePerf","as":"FirstIndexVal"}],
  "frame":[null,0]
},
{"calculate":"datum.CumulativePerf/datum.FirstIndexVal - 1", "as":"indexedPerf"},
{"calculate":"utcFormat(datum.date, '%b %e, %Y')", "as":"Date (Formatted)"}]
spec1.title = "DeskOne Cumuliative Performance"

spec1.data = {"name":"data"}

export default spec1