<template>
  <v-app>
    <div id="app">
      <TheNavigation />
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" style="margin-top: 20vh;"/>
      </transition>
    </div>
  </v-app>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
export default {
  components: {
    TheNavigation
  }
};
</script>

<style lang="less">
@import "./assets/styles/general.less";

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.innerContainer {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: auto;
  padding: 1rem;
  border-radius: 12px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// .input {
//   border: 1px solid #afddff;
//   padding: 10px;
//   margin-bottom: 20px;
// }
.btn {
  // background-color: #afddff;
  // color: #272727;
  padding: 2px;
  outline: none;
  border-radius: 5px;
}
.btn-primary {
  color: white !important;
  background-color: @main-color!important;
}
</style>
