<template>
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">
    <p class="mt-4">{{ imgData.title }}</p>
    <div class="upAnimation">
      <!-- 左右版 -->
      <template v-if="imgData.type === 'LR'">
        <div v-for="(path, index) in imgData.list" :key="index">
          <img :src="path.imgPath" :class="[index % 2 ? 'floatR' : '', imgData.classes]" />
        </div>
      </template>
      <!-- 正常版 -->
      <template v-else>
        <div v-for="(path, index) in imgData.list" :key="index" class="content">
          <img :src="path.imgPath" :class="imgData.classes" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForPortfolio',
  components: {},
  data() {
    return {
      imgData: {},
    };
  },
  computed: {
    useData() {
      return this.$store.getters['portfolio/getCurrentName'];
    },
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      return this.$store
        .dispatch('portfolio/getList', { name: this.useData })
        .then((res) => {
          this.imgData = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 80%;
  margin: 15px 15px 30px;
}
.isShadow {
  box-shadow: 2px 2px 6px $grey9;
}
.content {
  text-align: center;
}
.floatR {
  float: right;
}

// upAnimation
.upAnimation {
  animation-name: flash;
  animation-duration: 1s;
}
@keyframes flash {
  0% {
    opacity: 0;
    margin-top: 200px;
  }
  100% {
    opacity: 1;
    margin-top: inherit;
  }
}
</style>
