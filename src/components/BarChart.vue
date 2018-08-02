<template>
  <div>
    <div id="bar-chart" :traces="traces"></div>
  </div>
</template>

<script>
import data, { distictGroups } from "../model"
import { sortByKey } from "../utils/utils"
import plotlyCDN from "../../lib/plotly-cdn"
import Highcharts from "highcharts"

const markerColor = example => {
  return example.status == "passed"
    ? `rgb(0, ${255 / (50 * example.run_time) + 100}, 0)`
    : "red"
}

const generateTrace = (example, groups) => {
  return {
    name: example.status,
    x: groups,
    y: groups.map(g => (g == example.group ? example.run_time : undefined)),
    type: "bar",
    mode: "markers",
    text: example.description,
    marker: { color: markerColor(example) }
  }
}

export default {
  mounted() {
    // const examples = sortByKey(
    //   data.examples.filter(e => e.type == "controllers"),
    //   "run_time"
    // )
    const examples = sortByKey(data.examples, "run_time")
    // const traces = examples.map(e => generateTrace(e, distictGroups))
    // var layout = { barmode: "stack" }
    console.log(distictGroups)
    Highcharts.chart("bar-chart", {
      chart: {
        type: "bar"
      },
      title: {
        text: "Stacked bar chart"
      },
      xAxis: {
        categories: distictGroups
      },
      yAxis: {
        min: 0,
        title: {
          text: "Total fruit consumption"
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: "normal"
        }
      },
      series: examples.map(example => ({
        name: example.description,
        data: distictGroups.map(
          g => (g == example.group ? example.run_time : 0)
        )
      }))
    })
  },
  data() {
    return {
      traces: this.traces
    }
  }
}
</script>
