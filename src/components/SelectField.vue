<template>
  <div class="select-field" :class="{ invalid }">
    <p class="label" :class="{ shown: showLabel }">{{ label }}</p>
    <select :value="value" @change="$emit('input', $event.target.value)">
      <option disabled value>{{ label }}</option>
      <option v-for="choice in choices" :value="choice" :key="choice">{{
        choice
      }}</option>
    </select>
    <p class="label error" :class="{ shown: invalid }">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    invalid: {
      type: Boolean,
      default: false
    },
    choices: {
      type: Array,
      required: true
    },
    errorMessage: String,
    value: {
      type: String,
      required: true
    }
  },

  computed: {
    showLabel() {
      return this.value.length;
    }
  }
};
</script>

<style lang="scss">
.select-field {
  width: min-content;
  transition: transform 0.5s, background 0.5s;
  padding: 5px;
  border-radius: 7px;
  background: transparent;
  margin: auto;

  &.invalid {
    background: #f3080869;
  }

  .label {
    margin-left: 5px;
    font-size: 12px;
    font-weight: 700;
    transition: all 0.7s;
    //Defaults to hidden state
    opacity: 0;
    transform: translateY(100%);
    pointer-events: none;
    clip-path: inset(0 0 100% 0);
    text-align: left;

    &.shown,
    &.error.shown {
      opacity: 1;
      transform: translateY(0%);
      clip-path: inset(0 0 0% 0);
      pointer-events: all;
    }

    &.error {
      font-weight: 500;
      transform: translateY(-100%);
      clip-path: inset(100% 0 0 0);
    }
  }
  select {
    width: 200px;
    height: 35px;
    text-align: left;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    border: none;
    background: white;
    border-radius: 7px;
    margin: 0;
    color: var(--dark);
  }
}
</style>
