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

const distictGroups = [...new Set(Data.examples.map(e => e.group))]
const distictTypes = [...new Set(Data.examples.map(e => e.type))]

const passedCount = Data.examples.filter(example => example.status == "passed")
  .length

const failedCount = Data.examples.filter(example => example.status == "failed")
  .length

const countByType = (type) => {
  return Data.examples.filter(example => example.type == type).length
}

const distictTypesCount = distictTypes.map(countByType)
export default Data

export { distictGroups, distictTypes, failedCount, passedCount, distictTypesCount }
