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
      <body-selector v-model="bodyArea"></body-selector>
      <div class="info-card">
        <h2>Any Sympotoms?</h2>
        <textarea v-model="symptoms" class="symptoms"></textarea>
      </div>
      <button class="primary" @click="$router.push('scanner')">Next</button>
    </div>
  </div>
</template>

<script>
import BodySelector from "@/components/BodySelector.vue";
import TextField from "@/components/TextField.vue";
import SelectField from "@/components/SelectField.vue";
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
      bodyArea: "",
      symptoms: "",
      genderChoices: ["male", "female", "other"]
    };
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
  .info-card {
    padding: 20px;
    border-radius: 25px;
    background: #d3edff;
    margin: 20px auto;
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
