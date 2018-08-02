<template>
  <!-- <div  class="summary-container"  >
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
  </div> -->
<div class="result-summary-container" :summary="summary" :summary_line="summary_line" >
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Rspec Result
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <span class="icon has-text-info">
        <i class="fas fa-clock" style="color: blue"></i>
      </span>
      {{summary.duration}} seg
      <br>
    <strong>{{summary_line}}</strong>
    </div>
  </div>
  <footer class="card-footer">
    <strong class="card-footer-item">
      <span class="icon has-text-info">
        <i class="fas fa-check" style="color: lightgreen"></i>
      </span>
      {{summary.example_count}}
    </strong>

    <strong class="card-footer-item">
      <span class="icon has-text-info">
        <i class="fas fa-times" style="color: red"></i>
      </span>
      {{summary.failure_count}}
    </strong>
    <strong class="card-footer-item">
      <span class="icon has-text-info">
        <i class="fas fa-file-alt" style="color: yellow"></i>
      </span>
      {{summary.pending_count}}
    </strong>
  </footer>
</div>
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
.summary-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.summary-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
