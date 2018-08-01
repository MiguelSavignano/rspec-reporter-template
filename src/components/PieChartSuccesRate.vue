<template>
  <div>
    <div id="pie-chart-success-rate">PisuccesRate</div>
  </div>
</template>

<script>
import Data, {
  passedCount,
  failedCount,
  distictTypes,
  distictTypesCount
} from "../model"
import plotlyCDN from "../../lib/plotly-cdn"

const traces = [
  {
    values: [passedCount, failedCount],
    labels: ["Passed", "Failed"],
    domain: {
      x: [0, 0.48]
    },
    hoverinfo: "label+percent",
    hole: 0.4,
    type: "pie"
  },
  {
    values: distictTypesCount,
    labels: distictTypes,
    text: "CO2",
    textposition: "inside",
    domain: { x: [0.52, 1] },
    name: "CO2 Emissions",
    hoverinfo: "label+percent+name",
    hole: 0.4,
    type: "pie"
  }
]
const layout = {
  title: "Global Emissions 1990-2011",
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: "Rate",
      x: 0.17,
      y: 0.5
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: "Type",
      x: 0.82,
      y: 0.5
    }
  ],
  height: 600,
  width: 600
}

export default {
  mounted() {
    plotlyCDN(() => {
      Plotly.newPlot("pie-chart-success-rate", traces, layout)
    })
  },
  data() {
    return { traces, layout }
  }
}
</script>
