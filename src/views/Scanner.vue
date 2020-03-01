<template>
  <div class="camera">
    <canvas
      ref="sensor"
      class="camera-sensor"
      :class="{ show: showImage }"
    ></canvas>
    <video
      ref="videoView"
      class="camera-view"
      autoplay
      playsinline
      :class="{ flash: showImage }"
    ></video>
    <img src="//:0" ref="output" alt="" class="camera-output" />
    <div class="menu-card">
      <h3>Let's take a look</h3>
      <div :disabled="showImage" @click="takePhoto" class="camera-trigger">
        <img src="@/assets/camera.svg" alt="Take Photo" class="camera-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showImage: false
    };
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
    },
    async takePhoto() {
      this.showImage = true;
      let { sensor, output, videoView } = this.$refs;
      sensor.width = videoView.videoWidth;
      sensor.height = videoView.videoHeight;
      sensor.getContext("2d").drawImage(videoView, 0, 0);
      sensor.toBlob(this.uploadImage, "image/jpeg", 0.95);
    },
    async uploadImage(blob) {
      //   let reader = new FileReader();
      //   reader.onload = function() {
      //     axios.post(
      //       "https://automl.googleapis.com/v1beta1/projects/414357853263/locations/us-central1/models/ICN5748246790012928:predict"
      //     );
      //   };
      //   reader.readAsDataURL(blob);
    }
  },
  mounted() {
    this.setupCamera();
  }
};
</script>

<style lang="scss">
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

.camera-sensor.show {
  z-index: 1;
}

.menu-card {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: white;
  border-radius: 60px;
  max-width: 500px;
  border: 2px solid #edf7fa;

  .camera-trigger {
    padding: 20px;
    background: white;
    bottom: 80px;
    left: 50%;
    width: 80px;
    height: 80px;

    border-radius: 50%;
    transition: opacity 0.5s, transform 0.5s;
    cursor: pointer;

    &:active {
      opacity: 0.5;
      transform: translateX(-50%), scale(0.9);
    }
  }
}

.scanner {
  position: fixed;
  z-index: 3;
  top: 0;
  left: -30px;
  width: 30px;
  height: 100vh;
  filter: blur(10px);
  background: white;
  pointer-events: none;
  opacity: 0.6;

  &.scan {
    animation: scan 0.7s;
  }
}

@keyframes scan {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  to {
    opacity: 0.6;
    transform: translatex(130vw);
  }
}
</style>
