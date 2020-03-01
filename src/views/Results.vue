<template>
  <div class="page results-page">
    <div class="content">
      <header class="results-header">
        <h1>Results</h1>
      </header>

      <div class="info-card">
        <img
          v-if="shouldSeeDoctor"
          class="result-icon"
          src="@/assets/alert.svg"
        />
        <img v-else class="result-icon" src="@/assets/check.svg" />
        <h2>{{ result }}</h2>
        <p v-for="[disease, probability] in analysis" :key="disease">
          {{ disease }} : {{ probability }}%
        </p>
      </div>
      <div class="info-card">
        <dropdown
          title="Doctors"
          :showLoader="true"
          @click.native.once="requestLocation"
        >
          <doctor-card v-bind="example"></doctor-card>
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
      doctors: [],
      example: {
        name: "John Waidhofer",
        imageRef:
          "https://www.searchenginejournal.com/wp-content/uploads/2018/07/The-Smart-Marketer%E2%80%99s-Guide-to-Google-Alerts-760x400.png",
        siteUrl: "https://www.google.com",
        phoneNumber: "+18313327622",
        address: "address blah"
      }
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
      navigator.geolocation.getCurrentPosition(this.sendLocation, function() {
        console.log("You need to give me your location for that to work");
      });
    },
    sendLocation(pos) {
      let { latitude, longitude } = pos.coords;
      axios
        .post("", { latitude, longitude, description: this.userInfo.symptoms })
        .catch(err => console.error(err));
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
