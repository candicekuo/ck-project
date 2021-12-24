<template>
  <div>
    <p>Personal</p>
    <button @click="enter">enter</button>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  components: {},
  data() {
    return {};
  },
  methods: {
    enter() {
      this.$router.push({ name: 'Portfolio' });
    },
  },
};
</script>
<style lang="scss" scoped></style>
