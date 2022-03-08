<template>
  <div>
    <h1>Welcome to my CV aplication</h1>
    <p>
      This simple application demonstrates routing and two-ways binding in the
      Vue framework. The basic navigation bar allows you to select from two
      pages. Clicking will take you to the "make CV" page where there is a form
      for entering data. These are automatically imputed in the pre-prepared CV
      template. The CV template has fixed dimensions, identical to A4 paper
      size. The disadvantage of the application is the insufficient use of the
      component and the problem of text wrapping that exceeds the line size.
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
