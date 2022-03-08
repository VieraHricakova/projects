<template>
  <div class="container">
    <header>
      <h1>Your Curiculum Vitae</h1>
    </header>
    <nav>
      <div>{{ city }}</div>
      <div>{{ email }}</div>
      <div>{{ email }}</div>
      <div>{{ phone }}</div>
      <div v-if="socialNet">{{ socialNet }}</div>
      <div v-if="github">GitHub: {{ github }}</div>
    </nav>
    <main>
      <section>
        <article>
          <h2 v-if="!name" class="grey">my name...</h2>
          <h2 v-else>{{ name }}</h2>
          <p v-if="!position" class="grey">position...</p>
          <p v-else>{{ position }}</p>
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
          <div class="left">{{ projectDescription }}</div>
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
    <form>
      <h1>CV Form</h1>
      <label for="name">name</label>
      <input type="text" id="name" v-model="name" />
      <label for="position">position</label>
      <input type="text" id="position" v-model="position" />
      <div>about me</div>
      <textarea
        cols="100"
        rows="10"
        name="aboutMe"
        v-model="aboutMe"
      ></textarea>
      <label for="nameOfProject">name of project</label>
      <input type="text" id="nameOfProject" v-model="nameOfProject" />
      <div>Description of project</div>
      <textarea
        cols="100"
        rows="10"
        name="projectDescription"
        v-model="projectDescription"
      />
      <label for="educationName">education name</label>
      <input type="text" id="educationName" v-model="educationName" />
      <label for="educationAddress">education address</label>
      <input type="text" id="educationAddress" v-model="educationAddress" />
      <label for="dateOfEducationBeginning">education start date</label>
      <input
        type="text"
        id="dateOfEducationBeginning"
        v-model="dateOfEducationBeginning"
      />
      <label for="dateOfEducationEnding">end date of education</label>
      <input
        type="text"
        id="dateOfEducationEnding"
        v-model="dateOfEducationEnding"
      />
      <div>education´s description</div>
      <textarea
        cols="100"
        rows="10"
        name="educationDescription"
        v-model="educationDescription"
      />
      <label for="workExperienceName">work experience: name</label>
      <input type="text" id="workExperienceName" v-model="workExperienceName" />
      <label for="workExperienceAddress">work experience: address</label>
      <input
        type="text"
        id="workExperienceAddress"
        v-model="workExperienceAddress"
      />
      <label for="workExperienceBeginning">work start date</label>
      <input
        type="text"
        id="workExperienceBeginning"
        v-model="workExperienceBeginning"
      />
      <label for="workExperienceEnding">end date of work</label>
      <input
        type="text"
        id="workExperienceEnding"
        v-model="workExperienceEnding"
      />
      <div>description of work experience</div>
      <textarea
        cols="100"
        rows="10"
        name="workExperienceDescription"
        v-model="workExperienceDescription"
      />
      <label for="skills">skills</label>
      <input type="text" id="skills" v-model="skills" />
      <label for="languages">languages</label>
      <input type="text" id="languages" v-model="languages" />
      <label for="city">city</label>
      <input type="text" id="city" v-model="city" />
      <label for="email">email</label>
      <input type="text" id="email" v-model="email" />
      <label for="phone">phone</label>
      <input type="text" id="phone" v-model="phone" />
      <label for="socialNet">social Network</label>
      <input type="text" id="socialNet" v-model="socialNet" />
      <label for="gitHub">gitHub</label>
      <input type="text" id="github" v-model="github" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CvView",
  data() {
    return {
      name: "",
      position: "",
      aboutMe: "",
      nameOfProject: "",
      projectDescription: "",
      educationName: "",
      educationAddress: "",
      dateOfEducationBeginning: "",
      dateOfEducationEnding: "",
      educationDescription: "",
      workExperienceName: "",
      workExperienceAddress: "",
      workExperienceBeginning: "",
      workExperienceEnding: "",
      workExperienceDescription: "",
      skills: "",
      languages: "",
      city: "",
      email: "",
      phone: "",
      socialNet: "",
      github: "",
    };
  },
};
</script>

<style lang="stylus" scoped>
*
  box-sizing:border-box

.container
  width:840px
  height:1188px

nav
  width:30%
  height:100%
  padding: 20px 0
  float:right
  background: #161650

main
  width:70%
  height:100%
  display:flex
  flex-direction:column
  justify-content: space-around
  border:1px solid #161650

p
  margin: 0 10px
  padding:0 10px
  text-align:center

nav div
  padding: 10px
  color: #f7f4f3
  text-align: left

div .left
  text-align: left
  width:98%
  margin:1%
  white-space:normal

h1
  color:#625834
  text-align:center

h2, h4
  text-align:center

.bronze
  color:#625834

form
  margin: 30px 0 0 0
  display:flex
  flex-direction:column
  justify-content:flex-start

input
  margin 5px 0 10px 0
  height: 30px
  width: 250px

textarea
  margin: 10px 0 15px 0

label, div
  height: 20px
  width: 250px
  text-align:left

.grey
  color:lightgrey
</style>
