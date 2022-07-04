var indivSpec = {}
indivSpec.mark = 'bar';

indivSpec.encoding = {
  "x":{"field":"symbol","type":"nominal", "sort":"-y", "title":"Symbol"},
  "y":{"field":"Portfolio Weight","type":"quantitative", "axis":{"format":".0%"}},
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

var sectorSpec = {}
sectorSpec.mark = 'bar';

sectorSpec.encoding = {
  "x":{"field":"sector","type":"nominal", "sort":"-y","title":"Sector", "axis":{"labelAngle":"0"}},
  "y":{"field":"SectorWeights","type":"quantitative","title":"Sector Weights", "axis":{"format":".0%"}},
  "tooltip":[{"field":"sector"}, {"field":"SectorWeights", "format":".2%"}],
  "color":{"field":"SectorWeights","type":"quantitative","legend":null}
}

sectorSpec.transform = [{"calculate":"split(datum.value, ' ')", "as":"sector"},
  {"joinaggregate":[{
    "op":"sum",
    "field":"weight",
    "as":"totalWeight"
  }]},{"calculate":"datum.weight/datum.totalWeight","as":"adjWeight"},
  {"aggregate":[{
    "op":"sum",
    "field":"adjWeight",
    "as":"SectorWeights"
  }], "groupby":["sector"]},{"filter":"datum.SectorWeights > 0"}]

  sectorSpec.data = {"name":"data"};
  sectorSpec.title = "Sector Weights in Portfolio"


export {sectorSpec};