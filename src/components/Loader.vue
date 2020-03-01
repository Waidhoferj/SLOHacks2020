<template functional>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.loader {
  .spinner {
    width: 50px;
    height: 50px;
    margin: auto;
    background: var(--accent);
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      border-radius: 50%;
    }
    50% {
      border-radius: 7px;
    }
    100% {
      transform: rotate(360deg);
      border-radius: 50%;
    }
  }
}
</style>
