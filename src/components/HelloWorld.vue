<template>
  <div>
    <div id="bar-chart" :traces="traces"></div>
    <b-table :data="data" :columns="columns"></b-table>
  </div>
</template>

<script>
import data from "../../data/result"
import { sortByKey } from "../utils/utils"
const examples = data.examples

const generateTrace = (example, groups) => {
  return {
    name: example.description,
    x: groups,
    y: groups.map(g => (g == example.group ? example.run_time : undefined)),
    type: "bar",
    mode: "markers",
    marker: {
      color:
        example.status == "passed"
          ? `rgb(0, ${255 / (10 * example.run_time) + 50}, 0)`
          : "red"
    }
  }
}

export default {
  mounted() {
    // const examples = sortByKey(
    //   data.examples.filter(e => e.type == "controllers"),
    //   "run_time"
    // )
    const examples = sortByKey(data.examples, "run_time")
    const groups = [...new Set(examples.map(e => e.group))]
    const traces = examples.map(e => generateTrace(e, groups))
    var layout = { barmode: "stack" }
    Plotly.newPlot("bar-chart", traces, layout)
    console.log(traces)
  },
  data() {
    return {
      traces: this.traces,
      data: examples,
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
