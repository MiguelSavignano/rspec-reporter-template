<template>
  <div id="app">
    <NavBar />
    <div class="section-1">
      <ResultSummary />
      <PieChartSuccessRate />
      <PieChartTypes />
    </div>
    <hr />
    <BarChart />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import PieChartSuccessRate from "./components/PieChartSuccessRate.vue"
import PieChartTypes from "./components/PieChartTypes.vue"
import ResultSummary from "./components/ResultSummary.vue"
import BarChart from "./components/BarChart.vue"

export default {
  name: "app",
  components: {
    NavBar,
    PieChartSuccessRate,
    PieChartTypes,
    ResultSummary,
    BarChart
  }
}
</script>

<style>
.section-1 {
  display: flex;
  height: 250px;
}
.result-summary-container {
  padding: 1.5rem;
}
.section-1 > * {
  width: 33%;
}
</style>
