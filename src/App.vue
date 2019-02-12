<template>
  <div id="app">
    <el-menu mode="horizontal">
      <el-menu-item index="1"><router-link to="/">Inicio</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/turismo">Turismo</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/cultura">Cultura</router-link></el-menu-item>
    </el-menu>
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Turismo from './views/Turismo.vue'
import Cultura from './views/Cultura.vue'

export default {
  name: 'app',
  components: {
    Home,
    Turismo,
    Cultura,
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
  margin-top: 60px;
}
</style>
