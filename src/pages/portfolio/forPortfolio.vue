<template>
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">
    <p class="mt-4">{{ imgData[useData].title }}</p>
    <div v-for="(path, index) in imgData[useData].list" :key="index">
      <img :src="path.imgPath" :class="index % 2 ? 'floatR' : ''" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForImg',
  components: {},
  data() {
    return {
      imgData: {
        ehr: {
          title: '系統介面設計，以扁平化風格為基礎設計',
          list: [
            { imgPath: require('@/assets/img/1hr-1.png') },
            { imgPath: require('@/assets/img/1hr-2.png') },
          ],
        },
        banner: {
          title: '依照不同需求製作手繪、形象、產品、特賣不同風格的視覺設計',
          list: [
            { imgPath: require('@/assets/img/b1.jpg') },
            { imgPath: require('@/assets/img/b2.jpg') },
            { imgPath: require('@/assets/img/b3.jpg') },
            { imgPath: require('@/assets/img/b4.jpg') },
            { imgPath: require('@/assets/img/b5.jpg') },
            { imgPath: require('@/assets/img/b6.jpg') },
            { imgPath: require('@/assets/img/b7.jpg') },
            { imgPath: require('@/assets/img/b8.jpg') },
            { imgPath: require('@/assets/img/b9.jpg') },
            { imgPath: require('@/assets/img/b10.jpg') },
          ],
        },
        pic: {
          title: '童裝的穿搭拍攝，以孩童給人活潑的印象為概念，拍攝出一系列的產品視覺',
          list: [
            { imgPath: require('@/assets/img/photo1.png') },
            { imgPath: require('@/assets/img/photo2.png') },
            { imgPath: require('@/assets/img/photo3.png') },
          ],
        },
        edition: {
          title: '購物網站版型設計，配合不同時期的活動需求，設計變動的版型，使其能夠更靈活運用',
          list: [
            { imgPath: require('@/assets/img/type1.png') },
            { imgPath: require('@/assets/img/type2.png') },
            { imgPath: require('@/assets/img/type3.png') },
          ],
        },
      },
    };
  },
  computed: {
    useData() {
      return this.$route.params.name;
    },
  },
  mounted() {
    // console.log(this.useData)
    // useData 要記狀態
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
img {
  width: 80%;
  margin: 15px 15px 30px;
  // box-shadow: 2px 2px 6px $grey9;
}
.floatR {
  float: right;
}
</style>
