<template>
  <div class="doctor-card">
    <img class="doctor-image" :src="photo" v-if="photo" />
    <div class="doctor-info">
      <div class="primary-info">
        <p class="name">{{ name }}</p>
        <img class="icon" src="@/assets/phone.svg" @click="call" alt="phone" />
        <img
          class="icon"
          src="@/assets/link.svg"
          @click="goToSite"
          alt="website"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    address: String,
    website: String,
    phone_number: String,
    photo: String
  },
  methods: {
    call() {
      window.open("tel:" + this.phone_number);
    },
    goToSite() {
      window.open(this.website, "_blank");
    }
  }
};
</script>

<style lang="scss">
.doctor-card {
  width: 100%;
  border: 2px solid var(--accent);
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  .doctor-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .doctor-info {
    padding: 15px;
    .primary-info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      .name {
        padding: 10px 0;
      }
    }
  }
  .icon {
    width: 40px;
    cursor: pointer;
  }
}
</style>
