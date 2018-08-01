import Data from "../data/result.json"

const getSpecType = file_path => {
    const data = file_path.split("/")
    const name = data[2] || ""
    return `${name}`
  }

const getGroup = ({ full_description }) =>
  full_description.split(" ")[0]

Data.examples = Data.examples.map(example => {
  example.type = getSpecType(example["file_path"])
  example.group = getGroup(example)
  return example
})

export const distictGroups = [...new Set(Data.examples.map(e => e.group))]
export const distictTypes = [...new Set(Data.examples.map(e => e.type))]

export const passedCount = Data.examples.filter(example => example.status == "passed")
  .length

export const failedCount = Data.examples.filter(example => example.status == "failed")
  .length

const countByType = (type) => {
  return Data.examples.filter(example => example.type == type).length
}

export const maxCountByType = Math.max(...distictTypes.map(countByType))

export const markerColor = example => {
  return example.status == "passed"
    ? `rgb(0, ${255 / (50 * example.run_time) + 100}, 0)`
    : "red"
}

export const groupByTypeCounts = distictTypes.map((type) => {
  const count = countByType(type)
  return {
    name: type,
    y: count,
    sliced: count == maxCountByType,
    selected: count == maxCountByType,
    drilldown: type,
  }
})


// values: [passedCount, failedCount],
// labels: ["Passed", "Failed"],
export const distictTypesCount = distictTypes.map(countByType)
export default Data
