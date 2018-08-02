<template>
  <section class="hero is-bold --nav-background">
    <div class="hero-body --hero-body">
      <div class="container-navbar">
        <img class="img-logo" src="http://rspec.info/images/logo_ogp.png" alt="">
        <h1 class="title">
          Rspec reports
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../model"

export default {
  data() {
    return {}
  }
}
</script>

<style>
.--nav-background {
  background-image: linear-gradient(
    141deg,
    #88de75 0%,
    #71e3e6 71%,
    #67dfa8 100%
  );
}
.container-navbar {
  display: flex;
}
.container-navbar .img-logo {
  height: 50px;
  margin-right: 10px;
}
.hero-body.--hero-body {
  padding: 1rem 1.5rem;
}
</style>
