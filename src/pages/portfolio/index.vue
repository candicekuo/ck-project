<template>
  <div class="container">
    <div class="row">
      <div class="infoBox col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
        <div>
          <img src="@/assets/img/pic1.jpg" alt />
          <p class="title">{{ infoBox.name }}</p>
          <p>{{ infoBox.add }}</p>
          <div class="detail">
            <i class="bi bi-envelope"></i>
            {{ infoBox.mail }}
            <br />
            <i class="bi bi-phone"></i>
            {{ infoBox.phone }}
          </div>
          <div class="more" v-html="infoBox.use"></div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  components: {},
  data() {
    return {
      box: null,
      boxOffsetTop: null,
      marginDefault: 40,
      interval: 90, // 想要的間距

      infoBox: {},
    };
  },
  computed: {},
  async mounted() {
    await this.fetchInfo();
    this.handleTop();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleTop);
  },
  methods: {
    handleScroll() {
      //頁面滾動距離
      let scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // 手機 pass
      const windowWidth = document.body.scrollWidth;
      if (windowWidth < 768) return;
      if (scrollTop >= this.boxOffsetTop) {
        this.box.style.marginTop = `${scrollTop - this.marginDefault - this.boxOffsetTop}px`;
      } else {
        this.box.style.marginTop = `-${this.marginDefault}px`;
      }
    },
    handleTop() {
      this.box = document.querySelector('.infoBox');
      this.boxOffsetTop = this.box.offsetTop - this.interval;
    },
    fetchInfo() {
      return this.$store
        .dispatch('portfolio/getPersonalInfo')
        .then((res) => {
          this.infoBox = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.infoBox {
  word-break: break-all;
  margin-top: -40px;

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
      font-size: 0.875rem;
      border-top: 1px solid #eee;
      padding-top: 25px;
    }
  }
}

// Extra small devices (portrait phones, less than 576px) xs
@media (max-width: 575.98px) {
  .infoBox {
    margin-top: -16px;
  }
}

// Small devices (landscape phones, 576px and up) sm
@media (min-width: 576px) and (max-width: 767.98px) {
}

// Medium devices (tablets, 768px and up) md
@media (min-width: 768px) and (max-width: 991.98px) {
}

// Large devices (desktops, 992px and up) lg
@media (min-width: 992px) and (max-width: 1199.98px) {
}

// Extra large devices (large desktops, 1200px and up) xl
@media (min-width: 1200px) {
}
</style>
