<template>
  <div>Resume building...</div>
</template>

<script>
export default {
  name: 'Resume',
  components: {},
  data() {
    return {
      test: 'hello',
    };
  },
};
</script>
<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  animation-name: flash;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes flash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
