<template>
  <div id="app">

    <!-- Navigation -->
     <Navbar/>
    <router-view></router-view>
    <div></div>


  

  </div>
</template>

<script>
import Navbar from './components/Navbar'


export default {
  name: 'app',
  components: {
 
    Navbar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: black;
}
</style>
