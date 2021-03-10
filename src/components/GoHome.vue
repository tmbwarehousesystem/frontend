<template>
  <span class="go-home">
    <!-- <v-btn @click="goHome" color="primary"> -->
      <img class="scale" @click="goHome" width="30" :src="require(`@/assets/home.svg`)" />
    <!-- </v-btn> -->
  </span>
</template>

<script>
export default {
  methods: {
    goHome() {
      return this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.go-home {
  display: flex;
  cursor: pointer;
  position: absolute;
  margin: -2.7rem 0 0 20px;
}
button {
  border: 0;
}
</style>
