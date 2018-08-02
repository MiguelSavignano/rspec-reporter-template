<template>
  <div>
    <div id="pie-chart-success-rate"></div>
  </div>
</template>

<script>
import Data, {
  passedCount,
  failedCount,
  distictTypes,
  distictTypesCount,
  groupByTypeCounts
} from "../model"
import Highcharts from "highcharts"

export default {
  mounted() {
    Highcharts.chart("pie-chart-success-rate", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
      },
      title: {
        text: "Success rate"
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.y:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "{point.name}: {point.y:.1f}%",
            style: {
              color:
                (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                "black"
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ["50%", "75%"]
        }
      },
      series: [
        {
          name: "Success rate",
          colorByPoint: true,
          innerSize: "50%",
          data: [
            {
              name: "Passed",
              y: passedCount,
              color: "#1aef1a"
            },
            {
              name: "Failed",
              y: failedCount,
              color: "red"
            }
          ]
        }
      ]
    })
  },
  data() {
    return {}
  }
}
</script>
