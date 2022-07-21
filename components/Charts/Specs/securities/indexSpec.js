var predictionsSpec = {}
predictionsSpec.mark = 'point'


predictionsSpec.encoding = {
  "x":{"field":"value", "sort":"-y", "type":"quantitative"},
  "y":{"field":"valueCube","type":"quantitative"},
  "tooltip":{"field":"symbol"}
}

predictionsSpec.transform = [{
  "calculate":"datum.value*datum.value*datum.value",
  "as":"valueCube"
}]

predictionsSpec.data = {"name":"data"}
predictionsSpec.title = "Predicted Returns"
export {predictionsSpec}