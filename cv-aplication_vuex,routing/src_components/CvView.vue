<template>
  <div class="container">
    <header>
      <h1>Your Curiculum Vitae</h1>
    </header>
    <nav>
      <div>{{ city }}</div>
      <div>{{ email }}</div>
      <div>{{ phone }}</div>
      <div v-if="socialNet">social Network: {{ socialNet }}</div>
      <div v-if="github">GitHub: {{ github }}</div>
    </nav>
    <main>
      <section>
        <article>
          <h2>{{ name }}</h2>
          <p>{{ position }}</p>
        </article>
      </section>
      <section>
        <article>
          <h2 class="bronze">About me</h2>
          <p class="left">{{ aboutMe }}</p>
        </article>
      </section>
      <section>
        <article>
          <h2 class="bronze">IT Project</h2>
          <h4>{{ nameOfProject }}</h4>
          <p class="left">{{ projectDescription }}</p>
        </article>
      </section>
      <section>
        <article>
          <h2 class="bronze">Education</h2>
          <h4>{{ educationName }}</h4>
          <p>{{ educationAddress }}</p>
          <p>{{ dateOfEducationBeginning }} | {{ dateOfEducationEnding }}</p>
          <p>{{ educationDescription }}</p>
        </article>
      </section>
      <section>
        <article>
          <h2 class="bronze">Work experience</h2>
          <h4>{{ workExperienceName }}</h4>
          <p>{{ workExperienceAddress }}</p>
          <p>{{ workExperienceBeginning }} | {{ workExperienceEnding }}</p>
          <p>{{ workExperienceDescription }}</p>
        </article>
      </section>
      <section>
        <article>
          <h2 class="bronze">Skills</h2>
          <p>{{ skills }}</p>
        </article>
      </section>
      <section>
        <article>
          <h2 class="bronze">Langueges</h2>
          <p>{{ languages }}</p>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "CvView",
  props: {
    name: String,
    position: String,
    aboutMe: String,
    nameOfProject: String,
    projectDescription: String,
    educationName: String,
    educationAddress: String,
    dateOfEducationBeginning: String,
    dateOfEducationEnding: String,
    educationDescription: String,
    workExperienceName: String,
    workExperienceAddress: String,
    workExperienceBeginning: String,
    workExperienceEnding: String,
    workExperienceDescription: String,
    skills: String,
    languages: String,
    city: String,
    email: String,
    phone: String,
    socialNet: String,
    github: String,
  },
};
</script>

<style lang="stylus" scoped>
*
  box-sizing:border-box

main
  width:70%
  height:100%
  display:flex
  flex-direction:column
  justify-content: space-around
  border:1px solid #161650

.container
  width:840px
  height:1188px

nav
  width:30%
  height:100%
  padding: 20px 0
  float:right
  background: #161650

p
  margin: 0 10px
  padding:0 10px
  text-align:center

.left
  text-align:left

nav div
  padding: 10px
  color: #f7f4f3
  text-align: left

h1
  color:#625834
  text-align:center

h2, h4
  text-align:center

.bronze
  color:#625834
</style>
