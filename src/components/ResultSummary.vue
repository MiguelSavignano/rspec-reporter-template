<template>
  <div :summary="summary" :summary_line="summary_line" >
    <h1>Result summary</h1>
    <h3>{{summary_line}}</h3>
    <br>
    <ul class="summary-list">
      <li><b>Duration: </b>{{summary.duration}}</li>
      <li><b>Example count: </b>{{summary.example_count}}</li>
      <li><b>Failure count: </b>{{summary.failure_count}}</li>
      <li><b>Pending count: </b>{{summary.pending_count}}</li>
      <li><b>Errors outside of examples count: </b>{{summary.errors_outside_of_examples_count}}</li>
    </ul>
  </div>
</template>

<script>
import Data from "../model"

export default {
  data() {
    return { summary: Data.summary, summary_line: Data.summary_line }
  }
}
</script>
<style>
.summary-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 24%;
}
</style>
