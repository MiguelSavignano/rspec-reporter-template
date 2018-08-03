<template>
<div class="result-summary-container" :summary="summary" :summary_line="summary_line" >
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Results
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
