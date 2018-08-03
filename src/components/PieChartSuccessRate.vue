<template>
  <div>
    <div id="pie-chart-success-rate"></div>
  </div>
</template>

<script>
import { passedCount, failedCount, totalCount } from "../model"
import Highcharts from "highcharts"

export default {
  mounted() {
    Highcharts.chart("pie-chart-success-rate", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        height: "250px",
        plotShadow: false,
        type: "pie"
      },
      title: {
        text: ""
      },
      tooltip: {
        pointFormat: "{point.name2}: <b>{point.y:.1f}</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "{point.name}: {point.x:.1f}%",
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
              name2: "Total",
              y: passedCount,
              x: passedCount / totalCount * 100,
              color: "#1aef1a"
            },
            {
              name: "Failed",
              name2: "Total",
              y: failedCount,
              x: failedCount / totalCount * 100,
              color: "red"
            }
          ]
        }
      ]
    })
  },
  data() {
    return { passedCount, failedCount, totalCount }
  }
}
</script>
