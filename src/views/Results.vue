<template>
  <div class="page results-page">
    <div class="content">
      <header class="results-header">
        <h1>Results</h1>
      </header>

      <div class="info-card text-center">
        <img
          v-if="shouldSeeDoctor"
          class="result-icon"
          src="@/assets/alert.svg"
        />
        <img v-else class="result-icon" src="@/assets/check.svg" />
        <h2 class="diagnosis">{{ result }}</h2>
        <div class="diagnosis-info" v-if="analysis.length">
          <p>Your submission had a probable similarity to:</p>
          <table class="results-table">
            <tr class="header-row">
              <th class="disease-header">Disease</th>
              <th class="probability-header">Probability</th>
            </tr>
            <tr
              v-for="[disease, probability] in analysis"
              class="data-row"
              :key="disease"
            >
              <td>{{ disease }}</td>
              <td>{{ probability }}%</td>
            </tr>
          </table>
        </div>
        <p v-else>Your submission passed all of our tests</p>
      </div>
      <div class="info-card">
        <dropdown
          title="Doctors"
          :showLoader="true"
          @click.native="requestLocation"
        >
          <p style="opacity: 0"></p>
          <doctor-card
            v-for="doctor in doctors"
            v-bind="doctor"
            :key="doctor.name"
          ></doctor-card>
        </dropdown>
      </div>
      <button class="primary" @click="$router.push({ name: 'Info' })">
        Scan Again
      </button>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import DoctorCard from "@/components/DoctorCard";
import axios from "axios";
export default {
  components: {
    Dropdown,
    DoctorCard
  },
  data() {
    return {
      doctors: []
    };
  },
  computed: {
    analysis() {
      return Object.entries(this.$store.state.analysis).sort(
        (a, b) => a[1] > b[1]
      );
    },
    shouldSeeDoctor() {
      return this.analysis.length && this.analysis[0][1] > 50;
    },
    result() {
      return this.shouldSeeDoctor ? "See a Doctor" : "Most likely benign";
    },
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    requestLocation() {
      if (this.doctors.length) return;
      navigator.geolocation.getCurrentPosition(this.sendLocation, function() {
        console.log("You need to give me your location for that to work");
      });
    },
    async sendLocation(pos) {
      let { latitude, longitude } = pos.coords;
      let doctors;
      try {
        doctors = await axios.post("get-doctors", {
          latitude,
          longitude,
          description: this.userInfo.symptoms || "I'm really scared for my life"
        });
      } catch (err) {
        return console.log(err);
      }
      console.log("DOCTORS:", doctors);
      this.doctors = doctors.data;
    }
  }
};
</script>

<style lang="scss">
.results-page {
  background: var(--off-white);
  .content {
    .results-header {
      cursor: pointer;
      h1 {
        padding-left: 20px;
      }
    }

    .diagnosis {
      font-size: 27px;
      text-align: center;
    }

    .results-table {
      margin: 30px auto;
      position: relative;
      table-layout: fixed;
      border-radius: 7px;
      border-collapse: collapse;
      width: 100%;
      max-width: 300px;

      .header-row {
        text-align: center;
        height: 30;
      }

      td {
        text-align: center;
        padding: 10px;
      }
    }

    .info-card {
      background: white;
    }

    .result-icon {
      height: 40px;
    }

    .specialist-title {
      cursor: pointer;
    }
  }
}
</style>
