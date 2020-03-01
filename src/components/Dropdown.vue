<template>
  <div class="dropdown">
    <header @click="showContent = !showContent">
      <h2>{{ title }}</h2>
      <img
        src="@/assets/caret-down.svg"
        alt="dropdown"
        class="caret"
        :class="{ flip: showContent }"
      />
    </header>
    <div class="dropdown-content" :class="{ show: showContent }">
      <loader v-if="showLoader && !hasContent" />
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
export default {
  components: {
    Loader
  },
  props: {
    title: {
      type: String,
      required: true
    },
    showLoader: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showContent: false
    };
  },
  computed: {
    hasContent() {
      return this.$slots.default.length;
    }
  }
};
</script>

<style lang="scss">
.dropdown {
  header {
    display: flex;
    width: 100%;
    padding: 0px;
    justify-content: space-between;
    .caret {
      transform: rotate(0deg);
      transition: transform 0.5s;
      width: 30px;
      &.flip {
        transform: rotate(180deg);
      }
    }
  }

  .dropdown-content {
    max-height: 0;
    transition: max-height 0.7s;
    overflow: scroll;

    &.show {
      max-height: 600px;
    }

    .loader {
      .spinner {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
