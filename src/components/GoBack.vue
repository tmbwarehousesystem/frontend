<template>
  <span class="go-back">
    <v-btn @click="goBack" color="primary"> Go back </v-btn>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
  position: absolute;
  margin: -3rem 0 0 60px;
}
button {
  border: 0;
}
</style>
