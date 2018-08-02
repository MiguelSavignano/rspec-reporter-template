<template>
  <div>
    <div id="bar-chart" :traces="traces"></div>
  </div>
</template>

<script>
import data, { distictGroups, markerColor } from "../model"
import { sortByKey } from "../utils/utils"
import plotlyCDN from "../../lib/plotly-cdn"
import Highcharts from "highcharts"

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
        text: ""
      },
      xAxis: {
        categories: distictGroups
      },
      yAxis: {
        min: 0,
        title: {
          text: ""
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
        ),
        color: markerColor(example)
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
