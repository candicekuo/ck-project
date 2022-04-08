<template>
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">
    <div
      class="row"
      v-for="(data, index) in webInfo"
      :key="index"
      :class="index === 'flat' ? 'mb-4' : ''"
    >
      <div class="col-12 mt-4 text-grey">
        <p v-html="data.title"></p>
      </div>
      <div
        v-for="item in data.list"
        :key="item.imgPath"
        class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4"
      >
        <div class="listBox" @click="handlePage(item)">
          <div class="imgBox">
            <img :src="item.imgPath" :alt="item.label" />
          </div>
          <div class="msgCoverBox hidden-xs">
            <p>{{ item.label }}</p>
            <span>{{ item.content }}</span>
            <div class="btnMore">see more</div>
          </div>
        </div>
        <div class="msgInfoXS d-md-none d-lg-none d-xl-none">
          <p>{{ item.label }}</p>
          <span>{{ item.content }}</span>
        </div>
      </div>
      <hr class="dash" :key="index" v-if="index !== 'flat'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  components: {},
  data() {
    return {
      webInfo: {},
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    handlePage(val) {
      if (val.type) {
        this.$store.commit('portfolio/setCurrentName', val.name);
        window.localStorage.setItem('page', val.name);
        return this.$router.push({ name: 'ForPortfolio' });
      }
      window.open(val.goto);
    },
    fetchList() {
      return this.$store
        .dispatch('portfolio/getPortfolioList')
        .then((res) => {
          this.webInfo = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.dash {
  border: 0;
  border-bottom: 1px dashed #666;
  width: 100%;
  margin: 1rem 15px;
}
.listBox {
  position: relative;
  margin: 30px 0;
  border: 1px solid $ddd;
  background: $eee;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    .msgCoverBox {
      top: 0;
    }
  }
  .imgBox {
    height: 14vw;
    display: flex;
    justify-content: center;
  }
  .msgCoverBox {
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    top: 14vw;
    bottom: 0;
    color: $white;
    padding: 15px;
    border-radius: 8px;
    transition: top 0.5s;
    &:hover {
      .btnMore {
        bottom: 15px;
        transition: bottom 0.5s;
      }
    }
    .btnMore {
      font-size: 14px;
      color: $yellow;
      border: 1px solid $yellow;
      text-align: center;
      width: 50%;
      position: absolute;
      left: 25%;
      bottom: -80px;
    }
    p {
      font-weight: bold;
      margin-bottom: 8px;
    }
    span {
      color: $ddd;
    }
  }
}

.msgInfoXS {
  margin-bottom: 20px;
  p {
    font-weight: bold;
  }
  span {
    color: $grey9;
  }
}

// Extra small devices (portrait phones, less than 576px) xs
@media (max-width: 575.98px) {
  .listBox .imgBox {
    height: 60vw;
  }
  .listBox .msgCoverBox {
    top: 60vw;
  }
  .hidden-xs {
    display: none;
  }
}

// Small devices (landscape phones, 576px and up) sm
@media (min-width: 576px) and (max-width: 767.98px) {
  .listBox .imgBox {
    height: 25vw;
  }
  .listBox .msgCoverBox {
    top: 25vw;
  }
  .hidden-xs {
    display: none;
  }
}

// Medium devices (tablets, 768px and up) md
@media (min-width: 768px) and (max-width: 991.98px) {
  .listBox .imgBox {
    height: 18vw;
  }
  .listBox .msgCoverBox {
    top: 18vw;
  }
}

// Large devices (desktops, 992px and up) lg
@media (min-width: 992px) and (max-width: 1199.98px) {
  .listBox .imgBox {
    height: 18vw;
  }
  .listBox .msgCoverBox {
    top: 18vw;
  }
}

// Extra large devices (large desktops, 1200px and up) xl
@media (min-width: 1200px) {
}
</style>
