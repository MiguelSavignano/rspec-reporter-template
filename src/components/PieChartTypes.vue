<template>
  <div>
    <div id="pie-chart-group-by-types-count"></div>
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
    Highcharts.chart("pie-chart-group-by-types-count", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: "250px",
        type: "pie"
      },
      title: {
        text: ""
      },
      tooltip: {
        pointFormat: "{point.name}: <b>{point.y:.1f}%</b>"
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
          }
        }
      },
      series: [
        {
          name: "Type",
          colorByPoint: true,
          data: groupByTypeCounts
        }
      ]
    })
  },
  data() {
    return {}
  }
}
</script>
