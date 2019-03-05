<template lang="html">
  <div class="navbar">
    <el-menu background-color="blueviolet" text-color="#fff" active-text-color="#ffd04b" class="navbar" mode="horizontal">
      <el-menu-item class="navitem" index="1"><router-link to="/">Inicio</router-link></el-menu-item>
      <el-menu-item class="navitem" index="2"><router-link to="/info">Informacion General</router-link></el-menu-item>
      <el-menu-item class="navitem" index="3"><router-link to="/accommodation">Alojamiento</router-link></el-menu-item>
      <el-menu-item class="navitem" index="4"><router-link to="/activities">Actividades</router-link></el-menu-item>
      <el-menu-item class="navitem" index="5"><router-link to="/food">Gastronomia</router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped>
.navbar {
  border-bottom: 0px solid blueviolet !important;
}

.navitem:hover {
    background-color: #7b29c7 !important;
}
</style>
