<template>
  <div class="navi">
    <div class="routerlink" @click="$router.push('/introductionPage')">
      introduction
    </div>
    <p>|</p>
    <div class="routerlink" @click="$router.push('/View')">show CV</div>
  </div>
</template>

<script>
export default {
  name: "NavigPanel",
};
</script>

<style lang="stylus" scoped>

.navi
  width:50%
  height:60px
  background:#161650
  color:#f7f4f3
  display:flex
  justify-content:center
  align-items: center

.routerlink
  display:inline-block
  margin:0px 40px
  padding:10px 10px
  cursor:pointer

.routerlink:hover
  background: #625834

p
  margin:10px
</style>
