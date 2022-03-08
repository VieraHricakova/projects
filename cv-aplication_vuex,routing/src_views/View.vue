<template>
  <CvView
    :name="dataArray[0].name"
    :position="dataArray[0].position"
    :aboutMe="dataArray[0].aboutMeDescription"
    :nameOfProject="dataArray[0].itProject"
    :projectDescription="dataArray[0].projectDescription"
    :educationName="dataArray[0].educationName"
    :educationAddress="dataArray[0].educationAddress"
    :dateOfEducationBeginning="dataArray[0].dateOfEducationBeginning"
    :dateOfEducationEnding="dataArray[0].dateOfEducationEnding"
    :educationDescription="dataArray[0].educationDescription"
    :workExperienceName="dataArray[0].workExperienceName"
    :workExperienceAddress="dataArray[0].workExperienceAddress"
    :workExperienceBeginning="dataArray[0].workExperienceBeginning"
    :workExperienceEnding="dataArray[0].workExperienceEnding"
    :workExperienceDescription="dataArray[0].workExperienceDescription"
    :skills="dataArray[0].skills"
    :languages="dataArray[0].languages"
    :city="dataArray[0].city"
    :email="dataArray[0].email"
    :phone="dataArray[0].phone"
    :socialNet="dataArray[0].socialNet"
    :github="dataArray[0].github"
  />
</template>

<script>
import CvView from "../components/CvView.vue";
export default {
  name: "Vi-ew",
  components: { CvView },
  data() {
    return {
      dataArray: [],
    };
  },
  computed: {
    dataset() {
      return this.$store.state.dataset;
    },
  },
  created() {
    this.dataArray = this.dataset;
    console.log(this.dataArray[0]);
  },
};
</script>

<style lang="stylus"></style>
