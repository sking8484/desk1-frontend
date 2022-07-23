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