<template>
  <div class="content">
    <!-- <p>Portfolio</p>
    <a href="./A/index.html">test a</a>-->
    <div class="infoBox">
      <div>
        <img src="@/assets/img/pic1.jpg" alt />
        <p class="title">Candice Kuo</p>
        <p>Taiwan, Taipei</p>
        <div class="detail">
          <i class="bi bi-envelope"></i> candiceworker@gmail.com
          <br />
          <i class="bi bi-phone"></i> 0952 620 651
        </div>
        <div class="more">
          擅長工具
          <br />Photoshop、Illustrator <br />html、css、jquery、js、vue.js <br />RWD響應式網站
        </div>
      </div>
    </div>
    <div class="portfolioBox">
      <div v-for="(data, index) in portfolioInfo" :key="index">
        <img :src="data.imgPath" :alt="data.label" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  components: {},
  data() {
    return {
      test: 'hello',
      portfolioInfo: [
        {
          label: 'test1',
          imgPath: require('@/assets/img/p1.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p2.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p3.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p4.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p5.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p6.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p7.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p8.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p9.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p10.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p11.png'),
        },
        {
          label: 'test1',
          imgPath: require('@/assets/img/p12.png'),
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.content {
  width: 80vw;
  margin: 40px auto;
  min-height: 500px;
  display: flex;
  gap: 30px;
}
.infoBox {
  flex-basis: 25%;
  min-width: 264px;
  word-break: break-all;
  margin-top: -80px;

  > div {
    background: #fff;
    border: 1px solid #ddd;
    text-align: center;
    padding: 16px;

    img {
      border-radius: 100%;
      margin: 20px 0;
    }
    .title {
      font-weight: bold;
      font-size: 21px;
      ~ p {
        font-weight: 100;
        font-size: 14px;
        color: rgb(170, 170, 170);
      }
    }
    .detail,
    .more {
      margin: 26px 0 20px;
      line-height: 25px;
      text-align: left;
    }
    .more {
      border-top: 1px solid #eee;
      padding-top: 25px;
    }
  }
}
.portfolioBox {
  flex-basis: 75%;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 40px 25px;

  > div {
    height: 13vw;
    border: 1px solid #ddd;
    background: #eee;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
}
</style>
