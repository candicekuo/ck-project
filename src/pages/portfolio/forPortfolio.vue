<template>
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">
    <div v-for="(data, index) in ehr" :key="index">
      bfghjkl
      <img :src="require(data)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForImg',
  components: {},
  data() {
    return {
      test: 'hello',
      // imgData: {
      ehr: [

        '@/assets/img/1hr-1.png',
        '@/assets/img/1hr-2.png'
        // imgPath: require('@/assets/img/1hr-1.png'),
      ]
      // },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>