import data from "../data/result.json"

const getSpecType = file_path => {
    const data = file_path.split("/")
    const name = data[2] || ""
    return `${name}`
  }

const getGroup = ({ full_description }) =>
  full_description.split(" ")[0]

data.examples = data.examples.map(example => {
  example.type = getSpecType(example["file_path"])
  example.group = getGroup(example)
  return example
})

export default data
