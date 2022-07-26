var indivSpec = {}
indivSpec.mark = {'type':'bar','cornerRadiusEnd':5};

indivSpec.encoding = {
  "x":{"field":"symbol","type":"nominal", "sort":"-y", "title":"Symbol",'axis':{'grid':true}},
  "y":{"field":"Portfolio Weight","type":"quantitative", "axis":{"format":".1%"}},
  "tooltip":[{"field":"symbol"}, {"field":"Portfolio Weight", "format":".2%"}],
  "color":{"field":"Portfolio Weight", "type":"quantitative", "legend":null}
}

indivSpec.transform = [
  {"joinaggregate":[{
    "op":"sum",
    "field":"value",
    "as":"TotalWeight"
  }]},
  {"calculate":"datum.value/datum.TotalWeight",
  "as":"Portfolio Weight"},
  {"filter":"datum['Portfolio Weight'] > 0"}]

indivSpec.data = {"name":"data"};
indivSpec.title = "Weights in Portfolio"
indivSpec.background = null
export {indivSpec};




var predictionsSpec = {}
predictionsSpec.mark = 'circle'


predictionsSpec.encoding = {
  "x":{"field":"variance", "type":"quantitative", "title":"Previous 1 Year Daily Variance", "axis":{"format":"0.2%"}},
  "y":{"field":"preds","type":"quantitative", "title":"Predicted Next Day Returns", "axis":{"format":"0.2%"}},
  "color":{"field":"predsScaled","type":"quantitative", "scale":{"":""}, "legend":null},
  "tooltip":{"field":"symbol"},
  "size":{"field":"predsScaledCube","type":"quantitative","legend":null},
}

predictionsSpec.transform = [{
  "calculate":"datum.preds*datum.preds*datum.preds",
  "as":"predsCube"
},
{"calculate":"datum.preds/datum.variance", "as":"predsScaled"},
{"calculate":"datum.predsScaled*datum.predsScaled*datum.predsScaled", "as":"predsScaledCube"}]

predictionsSpec.data = {"name":"data"}
predictionsSpec.title = "Desirableness of Individual Securities"
export {predictionsSpec}








var correlationsSpec = {}
correlationsSpec.mark = 'rect'

correlationsSpec.encoding = {
  "x":{
    "field":"symbol",
    "type":"nominal",
    "title":null
  },
  "y":{
    "field":"symbol2",
    "type":"nominal",
    "title":null
  },
  "color":{
    "field":"value",
    "type":"quantitative",
    "legend":{
      "title":null
    },
    "scale":{"scheme":"viridis"}
  },
  "tooltip":[{"field":"symbol"}, {"field":"symbol2"},{"field":"value", "title":"Correlation", "format":"0.2%"}]
}
correlationsSpec.config = {'legend':{'orient':'right'}}
correlationsSpec.data = {"name":"data"}
correlationsSpec.title = "Correlations of S&P100 - Previous 252 Trading Days"
export {correlationsSpec}