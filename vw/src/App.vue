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
input:focus{outline:none;}
a{color:black; text-decoration:none;}
ul, li{margin:0; padding:0; list-style:none}
h1, h2, h3, h4, h5, h6{margin:0; padding:0;}

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
</style>
