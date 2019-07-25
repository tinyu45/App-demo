<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

html, body{margin:0; padding:0; width: 100%; height: 100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  height: 100%;
  width: 100%;
}
/**
@media (min-width:560px){
  html{
    font-size:54px;
  }
}
**/
</style>
