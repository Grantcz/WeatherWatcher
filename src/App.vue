<template>
  <div id="app">
    <h1>Weather-Watcher</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: Verdana, Trebuchet MS;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin-top: 60px;
  padding: 20px;
}
html {
  background:#4d50a2;
  padding: 0;
  margin: 0;
}
body {
  width: 75%;
  margin: 0 auto;
  padding: 0;
  background:#4d50a2;
}
body h1,h2,p{
  color: #ffffff;
}
body p a{
  color: #FFDE17;
}
</style>
