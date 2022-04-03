<template>
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">
    <p class="mt-4">{{ ehr.title }}</p>
    <div v-for="(path, index) in ehr.list" :key="index">
      <img :src="path.imgPath" :class="(index % 2) ? 'floatR' : ''" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForImg',
  components: {},
  data() {
    return {
      ehr: {
        title: '系統介面設計，以扁平化風格為基礎設計',
        list: [
          { imgPath: require('@/assets/img/1hr-1.png') },
          { imgPath: require('@/assets/img/1hr-2.png') },
        ]
      }

    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
img {
  width: 80%;
  margin: 15px 15px 30px;
}
.floatR {
  float: right;
}
</style>