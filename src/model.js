import Data from "../data/result.json"
import { titleCase } from "./utils/utils"

const getSpecType = file_path => {
    const data = file_path.split("/")
    const name = data[2] || ""
    return `${name}`
  }

const getGroup = ({ full_description }) =>
  full_description.split(" ")[0]

Data.examples = Data.examples.map(example => {
  example.type = titleCase(getSpecType(example["file_path"]))
  example.group = titleCase(`${example.type}:${getGroup(example)}`)
  return example
})

export const distictGroups = [...new Set(Data.examples.map(e => e.group))]

export const distictTypes = [...new Set(Data.examples.map(e => e.type))]

export const totalCount = Data.examples.length

export const passedCount = Data.examples.filter(example => example.status == "passed")
  .length

export const failedCount = Data.examples.filter(example => example.status == "failed")
  .length

const countByType = (type) => {
  return Data.examples.filter(example => example.type == type).length
}

const runtimes = Data.examples.map(example => example.run_time)

export const minRuntime = Math.min(...runtimes)

// export const averageRuntime = (() => {
//   const sum = runtimes.reduce(function(a, b) { return a + b; })
//   const avg = sum / runtimes.length
//   return avg
// })()

// console.log(averageRuntime)

export const maxCountByType = Math.max(...distictTypes.map(countByType))

export const markerColor = example => {
  const colorPercent = (100 / (example.run_time / minRuntime))
  const  color = ((colorPercent * 255) / 100) + 130
  return example.status == "passed"
    ? `rgb(0, ${Math.round(color)}, 0)`
    : "red"
}

export const groupByTypeCounts = distictTypes.map((type) => {
  const count = countByType(type)
  return {
    name: type,
    name2: "Total",
    y: count,
    x: (count / totalCount) * 100,
    sliced: count == maxCountByType,
    selected: count == maxCountByType,
    drilldown: type,
  }
})


// values: [passedCount, failedCount],
// labels: ["Passed", "Failed"],
export const distictTypesCount = distictTypes.map(countByType)
export default Data
