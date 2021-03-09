<template>
  <div v-if="enable" class="snackbar-component">
    <div class="snackbar snackbar-active">
      <span class="message" v-if="!!message">{{ message }}</span>
      <button class="btn" color="primary" style="margin-left: 0px; float: right;"
        click.delegate="enable = false" @click="enable = false">Cancel</button>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    message: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      enable: false,
    };
  },
  created() {
    this.enable = true,
    console.log(console.log(this.message));
  },
  beforeDestroy() {
    this.enable = false;
  },
};
</script>

<style lang="less" scoped>
.snackbar-component {
  position: absolute;
  bottom: (55px + 10px);
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);

  width: auto;
  min-width: 344px;
  max-width: 688px;
  min-height: 48px;
  background-color: #272727;
  border-radius: 5px;
  color: white;

  .snackbar {
    padding: 0.75rem;
    vertical-align: middle;
    border-radius: 4px;
    transition: all 0.35s ease;
    text-align: left;

    span.message {
      font-size: 1rem;
      vertical-align: middle;
      color: white;
    }

    button.btn {
      vertical-align: middle;
      margin-left: 1.5rem;
      background-color: #1597f6;
    }
  }
}
</style>
