<template>
  <div id="app">
    <NavBar />
    <div class="section-1">
      <PieChartSuccesRate />
      <PieChartTypes />
      <ResultSummary />
    </div>
    <hr />
    <BarChart />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import PieChartSuccesRate from "./components/PieChartSuccesRate.vue"
import PieChartTypes from "./components/PieChartTypes.vue"
import ResultSummary from "./components/ResultSummary.vue"
import BarChart from "./components/BarChart.vue"

export default {
  name: "app",
  components: {
    NavBar,
    PieChartSuccesRate,
    PieChartTypes,
    ResultSummary,
    BarChart
  }
}
</script>

<style>
.section-1 {
  display: flex;
}
.section-1 > * {
  width: 33%;
}
</style>
