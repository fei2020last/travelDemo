<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@media only screen and (max-width: 960px) {
  html {
    font-size: 10px;
  }
}
@media only screen and (max-width: 1280px) and (min-width: 960px) {
  html {
    font-size: 12px;
  }
}
@media only screen and (max-width: 1600px) and (min-width: 1280px) {
  html {
    font-size: 14px;
  }
}
</style>
