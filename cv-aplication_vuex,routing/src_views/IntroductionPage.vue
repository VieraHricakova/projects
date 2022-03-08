<template>
  <div>
    <h1>Welcome to my CV aplication</h1>
    <p>
      This simple application demonstrates routing and Vuex in the Vue
      framework. The basic navigation bar allows you to select from two pages.
      Click to select the "show CV" page. The ‘store’ contains biographical data
      of one individual that is displayed on the "Show CV" page.
    </p>
  </div>
</template>

<script>
export default {
  name: "IntroductionPage",
};
</script>

<style lang="stylus" scoped>

div
  width:50%
  margin: 30px
  display:flex
  flex-direction: column
  justify-content: center
  align-item: center

p
  text-align:left
</style>
