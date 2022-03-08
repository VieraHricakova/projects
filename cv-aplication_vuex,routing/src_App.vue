<template>
  <nav class="nav">
    <navigation />
  </nav>
  <div class="rout-view">
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navigation },
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px


.nav
  width:100%
  height:100%
  display:flex
  justify-content:center

.rout-view
  display:flex
  justify-content:center
</style>
