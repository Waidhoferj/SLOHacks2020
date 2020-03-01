<template>
  <div class="page about-page">
    <img class="background" src="@/assets/hero-blob.svg" />
    <div class="content centered">
      <header>
        <h1>Identify Skin Cancer</h1>
      </header>
      <div class="card">
        <h3>How does this effect me?</h3>
        <p ref="test">
          Skin cancer is the most common cancer in the United States.
          Fortunately, it is highly curable if detected early and treated
          properly. We can identify likely cases of melanoma using your device’s
          camera and refer you to a local doctor for treatment.
        </p>
        <button class="primary" @click="transitionToInfo">Diagnose</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    transitionToInfo() {
      this.$router.push({ name: "Info" });
    }
  }
};
</script>

<style lang="scss">
.about-page {
  background: var(--off-white);

  header {
    padding: 10px;
    h1 {
      filter: drop-shadow(0px 0px 4px white);
    }
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    object-fit: cover;
  }

  .card {
    position: absolute;
    bottom: 20px;
    width: 100%;
    max-width: 600px;
    left: 50%;
    padding: 25px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.123);
    transform: translateX(-50%);
    background: white;

    button {
      margin: 30px auto;
    }
  }
}
</style>
