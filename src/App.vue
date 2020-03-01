<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

#app {
  font-family: "Open Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --dark: #5c6278;
  --accent: #2d8fe2;
  --off-white: #edf7fa;
  color: #5c6278;
  background: var(--off-white);
  height: 100%;
}

h1 {
  margin: 25px 0;
  font-size: 34px;
  font-weight: 700;
  color: var(--dark);
}

h2 {
  font-size: 23px;
  font-weight: 400;
  margin: 20px 0;
}

h3 {
  font-size: 20px;
  font-weight: 300;
}

.page {
  width: 100%;
  min-height: 100%;
  background: var(--accent);
  overflow-y: scroll;

  .content {
    padding: 20px;
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
    z-index: 1;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.card {
  background: white;
  border-radius: 7px;
  width: 100%;
  header {
    text-align: center;
    padding: 20px 10px;
  }
}

.back {
  cursor: pointer;
  position: fixed;
  width: 40px;
  top: 20px;
  left: 20px;
  transition: transform 0.3s, opacity 0.7s;
  z-index: -1;
  &:active {
    transform: scale(0.95);
  }
}

input {
  font-family: inherit;
  font-size: 17px;
  display: block;
  margin: 10px auto;
  background: transparent;
  border: none;
}

button {
  font-size: 17px;
  display: block;
  padding: 10px 45px;
  margin: 10px auto;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid white;
  transition: transform 0.5s;

  &.primary {
    color: white;
    font-size: 20px;
    background: var(--accent);
  }
  &.secondary {
    background: transparent;
    border: 2px solid var(--accent);
    color: var(--accent);
  }

  &.shake {
    animation: shake 0.5s;
  }

  &:active {
    transform: scale(0.95);
  }
}

//Animations
//=======================================
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.4s;
    pointer-events: none;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

@keyframes shake {
  25% {
    transform: translateX(20px);
  }
  75% {
    transform: translateX(-20px);
  }
}
</style>
