<template>
  <div class="personal">
    <div class="img_box">
      <button class="enter_btn" @click="enter">enter</button>
      <div class="font_box">
        <p class="title">HELLO</p>
        <p>test,test,test,test</p>
      </div>
    </div>
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
<style lang="scss" scoped>
.personal {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
    45deg,
    rgba(255, 149, 129, 1) 33%,
    rgba(255, 160, 136, 0.8) 58%
  );
  // background: linear-gradient(
  //   46deg,
  //   rgba(255, 134, 136, 1) 39%,
  //   rgba(255, 160, 136, 0.8) 58%
  // );

  .img_box {
    position: relative;
    border: 1px solid #fff;
    width: 40vw;
    height: 65vh;
    max-width: 550px;
    min-width: 450px;
    margin: auto;
    box-shadow: -60px -60px 0px rgba(208, 103, 76, 0.4);
    // 看要不要改 befour

    .enter_btn {
      position: absolute;
      right: -8%;
      top: 30%;
      background: $white;
    }

    .font_box {
      position: absolute;
      right: -30%;
      top: 10%;

      .title {
        letter-spacing: 2px;
        font-size: 22px;
      }
    }
  }
}
</style>
