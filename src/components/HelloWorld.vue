<template>
  <div>
    <div id="bar-chart" :traces="traces"></div>
    <b-table :data="data" :columns="columns"></b-table>
  </div>
</template>

<script>
import data from "../../data/result"
import { sortByKey } from "../utils/utils"
console.log(data.examples)

const getTraceByType = (_examples, type) => {
  const examples = _examples.filter(example => example.type == type)

  return {
    name: type,
    x: examples.map((example, index) => example.group),
    y: examples.map(example => example.run_time),
    type: "bar"
  }
}

const getTraces = examples => {
  const types = [...new Set(examples.map(e => e.type))]
  return types.map(type => {
    return getTraceByType(examples, type)
  })
}

export default {
  mounted() {
    const traces = getTraces(data.examples)
    Plotly.newPlot("bar-chart", getTraces(data.examples))
    console.log(traces)
  },
  data() {
    return {
      traces: getTraces(data.examples),
      data: data.examples,
      columns: [
        {
          field: "group",
          label: "Group",
          width: "40",
          numeric: true
        },
        {
          field: "status",
          label: "First Name"
        },
        {
          field: "type",
          label: "Last Name"
        },
        {
          field: "run_time",
          label: "Date",
          centered: true
        },
        {
          field: "sa",
          label: "Gender"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
