<template>
  <div class="page info-page">
    <div class="content">
      <header>
        <h1>Basic Info</h1>
      </header>

      <div class="info-card personal-info centered">
        <select-field
          v-model="gender"
          id="gender"
          label="Gender"
          :choices="genderChoices"
        ></select-field>
        <text-field v-model.number="age" type="number" label="Age" />
      </div>
      <body-selector v-model="bodyRegion"></body-selector>
      <div class="info-card">
        <h2>Any Symptoms?</h2>
        <textarea v-model="symptoms" class="symptoms"></textarea>
      </div>
      <button class="primary" @click="submitInfo">Next</button>
    </div>
  </div>
</template>

<script>
import BodySelector from "@/components/BodySelector.vue";
import TextField from "@/components/TextField.vue";
import SelectField from "@/components/SelectField.vue";
import anime from "animejs/lib/anime.es.js";
export default {
  components: {
    BodySelector,
    TextField,
    SelectField
  },
  data() {
    return {
      age: null,
      gender: "",
      bodyRegion: "",
      symptoms: "",
      genderChoices: ["male", "female", "other"]
    };
  },
  methods: {
    submitInfo() {
      if (![this.age, this.gender, this.bodyRegion].every(Boolean))
        return this.shakeSubmit();
      let info = {
        age: this.age,
        gender: this.gender,
        bodyRegion: this.bodyRegion,
        symptoms: this.symptoms
      };
      this.$store.commit("updateUserInfo", info);
      this.$router.push("scanner");
    },
    shakeSubmit() {
      anime({
        targets: "button.primary",
        keyframes: [
          { translateX: 70 },
          { translateX: 0 },
          { translateX: -70 },
          { translateX: 0 }
        ],
        duration: 750,
        easing: "easeOutElastic(1, .8)"
      });
    }
  }
};
</script>

<style lang="scss">
.info-page {
  header {
    padding: 0 30px;
    h1 {
      color: white;
    }
  }

  .personal-info {
    flex-wrap: wrap;
  }

  .symptoms {
    resize: none;
    width: 100%;
    height: 100px;
    border-radius: 7px;
    font-size: inherit;
    font-family: inherit;
    padding: 10px;
    border: none;
  }
}
</style>
