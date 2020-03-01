<template>
  <div class="scanner-page">
    <canvas
      ref="sensor"
      class="camera-sensor"
      :class="{ show: showImage }"
    ></canvas>
    <video
      ref="videoView"
      class="camera-view"
      :class="{ hide: state == 'loading-camera' }"
      autoplay
      playsinline
    ></video>

    <img src="//:0" ref="output" alt="" class="camera-output" />
    <div class="upload">
      <label for="file-selector">
        <img src="@/assets/upload.svg" alt="upload" />
      </label>
      <input
        id="file-selector"
        type="file"
        accept="image/*;capture=camera"
        style="display:none"
        @change="getInputtedFiles"
        ref="fileSelector"
      />
    </div>

    <div class="menu-card">
      <transition-group>
        <loader
          class="loader"
          v-if="state == 'loading-camera' || state == 'loading-result'"
          key="loader"
        />
        <div
          v-else-if="state == 'taking-photo'"
          class="camera-options"
          key="camera-options"
        >
          <h3>Let's take a look</h3>
          <div
            :disabled="state !== 'taking-photo'"
            @click="takePhoto"
            class="camera-trigger"
          >
            <img
              src="@/assets/camera.png"
              alt="Take Photo"
              class="camera-icon"
            />
          </div>
        </div>

        <div
          v-if="state == 'show-options'"
          class="navigation-options"
          key="navigation-options"
        >
          <button class="primary" @click="$router.push('results')">
            See Results
          </button>
          <button class="secondary" @click="state = 'taking-photo'">
            Retake
          </button>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader";
let states = {
  LOADING_CAMERA: "loading-camera",
  NO_PERMISSION: "permission-denied",
  TAKING_PHOTO: "taking-photo",
  LOADING_RESULTS: "loading-result",
  SHOWING_OPTIONS: "show-options"
};
export default {
  components: {
    Loader
  },
  data() {
    return {
      state: states.LOADING_CAMERA
    };
  },
  computed: {
    showImage() {
      return (
        this.state === states.LOADING_RESULTS ||
        this.state === states.SHOWING_OPTIONS
      );
    }
  },
  methods: {
    async setupCamera() {
      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
      } catch (err) {
        alert("You do not have video access");
        this.$router.go(-1);
      }
      let track = stream.getTracks()[0];
      this.$refs.videoView.srcObject = stream;
      this.$refs.videoView.oncanplay = () => {
        console.log("loaded");
        this.state = states.TAKING_PHOTO;
      };
    },
    takePhoto() {
      this.state = states.LOADING_RESULTS;
      let { sensor, output, videoView } = this.$refs;
      sensor.width = videoView.videoWidth;
      sensor.height = videoView.videoHeight;
      sensor.getContext("2d").drawImage(videoView, 0, 0);
      sensor.toBlob(this.sendImage, "image/jpeg", 1);
    },
    async sendImage(blob) {
      let fd = new FormData();
      fd.append("image", blob);
      let analysis;
      try {
        analysis = await axios.post("submit-image", fd);
      } catch (err) {
        this.state = states.TAKING_PHOTO;
        return console.log(err);
      }
      this.$store.commit("updateAnalysis", analysis.data);
      this.state = states.SHOWING_OPTIONS;
    },
    getInputtedFiles() {
      const { files } = this.$refs.fileSelector;
      this.sendImage(files[0]);
    }
  },
  mounted() {
    this.setupCamera();
  }
};
</script>

<style lang="scss">
.scanner-page {
  .upload {
    position: fixed;
    top: 20px;
    right: 30px;
    width: 50px;
    cursor: pointer;
    filter: drop-shadow(0px 0px 5px white);
  }

  .title {
    position: fixed;
    top: 70px;
    left: 0;
    text-align: center;
    width: 100%;
    color: white;
    font-size: 30px;
    z-index: 5;
  }

  .camera,
  .camera-view,
  .camera-sensor,
  .camera-output {
    position: fixed;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .camera-sensor {
    background: var(--accent);
    &.show {
      z-index: 1;
    }
  }

  .camera-view {
    opacity: 1;
    transition: opacity 0.7s;
  }

  .menu-card {
    width: 100%;
    height: 220px;
    position: fixed;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    padding: 25px;
    padding-bottom: 0px;
    z-index: 2;
    text-align: center;
    background: white;
    border-radius: 60px 60px 0 0;
    max-width: 500px;
    border: 2px solid #edf7fa;

    .loader {
      margin: auto;
    }

    .camera-trigger {
      width: min-content;
      height: min-content;
      padding: 20px;
      margin: 20px auto;
      background: var(--off-white);
      border: 1px solid #e2edf0;
      border-radius: 50%;
      transition: opacity 0.5s, transform 0.5s;
      cursor: pointer;

      &:active {
        opacity: 0.5;
        transform: translateX(-50%), scale(0.9);
      }

      img {
        display: block;
      }
    }

    .navigation-options {
      button.primary {
        margin-top: 50px;
      }
    }
  }

  .hide {
    opacity: 0;
  }
}
</style>
