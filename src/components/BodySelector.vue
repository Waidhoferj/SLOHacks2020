<template>
  <div class="info-card body-selector">
    <h2>Which body region are you scanning?</h2>

    <svg width="175" height="389" xmlns="http://www.w3.org/2000/svg">
      <g
        id="body-figure"
        stroke="#979797"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <rect
          class="head/neck"
          stroke-width="1.488"
          fill="#D8D8D8"
          x="79.571"
          y="67.179"
          width="16.369"
          height="28.274"
          rx="8.185"
          @click="selectBodyPart"
        />
        <path
          d="M75.952 189.09l1.48.156c6.539.687 11.282 6.545 10.595 13.084l-7.886 75.034c.132.676.207 1.374.22 2.087l1.35 77.369c.115 6.574-5.121 11.996-11.695 12.11l-1.488.026c-6.574.115-11.996-5.12-12.11-11.695l-1.336-76.423a11.88 11.88 0 01-.303-4.195l8.089-76.957c.687-6.539 6.545-11.283 13.084-10.595z"
          class="lower-extremity"
          stroke-width="1.488"
          fill="#D8D8D8"
          @click="selectBodyPart"
        />
        <path
          d="M98.072 189.09l-1.48.156c-6.539.687-11.282 6.545-10.595 13.084l7.885 75.034a11.978 11.978 0 00-.219 2.087l-1.35 77.369c-.115 6.574 5.121 11.996 11.695 12.11l1.488.026c6.574.115 11.996-5.12 12.11-11.695l1.335-76.423a11.88 11.88 0 00.303-4.195l-8.088-76.957c-.687-6.539-6.545-11.283-13.084-10.595z"
          class="lower-extremity"
          stroke-width="1.488"
          fill="#D8D8D8"
          @click="selectBodyPart"
        />
        <path
          d="M67.549 93.307c5.295 2.248 7.766 8.363 5.518 13.659L53.88 152.169a10.42 10.42 0 01-1.542 2.549l-7.11 44.888c-.836 5.277-5.79 8.876-11.067 8.04-5.276-.835-8.876-5.79-8.04-11.066l7.765-49.032c.062-1.18.328-2.369.816-3.52L53.89 98.826c2.248-5.295 8.363-7.766 13.659-5.518zM108.242 93.307c-5.296 2.248-7.766 8.363-5.518 13.659l19.187 45.203a10.39 10.39 0 002.163 3.239l7.31 46.148c.835 5.276 5.79 8.876 11.066 8.04 5.276-.836 8.876-5.79 8.04-11.067l-7.914-49.972a9.664 9.664 0 00-.951-2.915 10.517 10.517 0 00-.537-1.613l-19.187-45.204c-2.248-5.295-8.363-7.766-13.659-5.518z"
          class="upper-extremity"
          stroke-width="1.488"
          fill="#D8D8D8"
          @click="selectBodyPart"
        />
        <path
          d="M73.973 30.686C77.556 28.23 81.879 27 86.942 27c5.542 0 10.486 1.472 14.833 4.417h0a11.905 11.905 0 015.183 8.822 72.14 72.14 0 01-.6 17.466 72.454 72.454 0 01-3.47 13.53 11.905 11.905 0 01-11.192 7.848h-9.04a11.905 11.905 0 01-11.665-9.53 117.235 117.235 0 01-1.836-12.275 116.483 116.483 0 01-.335-17.425h0a11.905 11.905 0 015.153-9.167z"
          class="head/neck"
          stroke-width="1.488"
          fill="#D8D8D8"
          @click="selectBodyPart"
        />
        <path
          d="M65.663 91h44.304c6.575 0 11.905 5.33 11.905 11.905 0 .835-.088 1.667-.262 2.484-4.051 18.985-6.077 36.594-6.077 52.827 0 15.38 1.818 30.76 5.455 46.14 1.513 6.398-2.448 12.812-8.846 14.325-.898.212-1.817.319-2.74.319H66.175c-6.575 0-11.905-5.33-11.905-11.905 0-.803.081-1.603.242-2.39 2.96-14.445 4.44-29.941 4.44-46.489 0-17.546-1.663-35.257-4.992-53.132-1.204-6.464 3.06-12.68 9.524-13.883a11.905 11.905 0 012.18-.201z"
          class="anterior-torso"
          stroke-width="1.488"
          fill="#D8D8D8"
          @click="selectBodyPart"
        />
        <rect
          class="palms/soles"
          fill="#D8D8D8"
          transform="rotate(-9 143.5 209.5)"
          x="134"
          y="198"
          width="19"
          height="23"
          rx="8"
          @click="selectBodyPart"
        />
        <rect
          class="palms/soles"
          fill="#D8D8D8"
          transform="scale(-1 1) rotate(-9 0 635.158)"
          x="24"
          y="198"
          width="19"
          height="23"
          rx="8"
          @click="selectBodyPart"
        />
        <path
          d="M104.11 156.523c1.597 33.082 2.469 50.45 2.617 52.105 0 0 0 0 0 0a7.054 7.054 0 1013.994-1.721c-3.18-20.242-4.77-37.315-4.77-51.22 0-8.378 1.4-24.607 4.202-48.687l-15.417 45.098a11.905 11.905 0 00-.626 4.425z"
          class="lateral-torso"
          stroke-width="1.488"
          fill="#D8D8D8"
          @click="selectBodyPart"
        />
        <path
          d="M69.89 156.523c-1.597 33.082-2.469 50.45-2.617 52.105 0 0 0 0 0 0a7.054 7.054 0 11-13.994-1.721c3.18-20.242 4.77-37.315 4.77-51.22 0-8.378-1.4-24.607-4.202-48.687l15.417 45.098c.486 1.422.699 2.924.626 4.425z"
          class="lateral-torso"
          stroke-width="1.488"
          fill="#D8D8D8"
          @click="selectBodyPart"
        />
        <path d="M81 60c3.222 4 5.888 4 8 0" id="nose" stroke-width="1.488" />
        <ellipse
          class="palms/soles"
          fill="#D8D8D8"
          cx="107.5"
          cy="361.5"
          rx="13.5"
          ry="9.5"
          @click="selectBodyPart"
        />
        <ellipse
          class="palms/soles"
          fill="#D8D8D8"
          cx="66.5"
          cy="361.5"
          rx="13.5"
          ry="9.5"
          @click="selectBodyPart"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    selectBodyPart(event) {
      let lastSelected = document.querySelector(".selected");
      if (lastSelected) lastSelected.classList.remove("selected");
      let selectedClass = event.target.classList[0];
      this.$emit("input", selectedClass.replace(/[-]/g, " "));
      event.target.classList.add("selected");
    }
  }
};
</script>

<style lang="scss">
.body-selector {
  width: 100%;
  text-align: center;

  .selected {
    fill: #5c6278;
  }
}
</style>
