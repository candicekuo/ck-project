<template>
  <div class="wp" :class="currentTab !== 'Portfolio' ? 'bg' : ''">
    <header class="header">
      <nav class="menu">
        <ul>
          <li class="icon">
            <i class="bi bi-x-diamond-fill"></i>
          </li>
          <li
            v-for="item in menuList"
            :key="item.pushName"
            :class="currentTab === item.pushName ? 'is-active' : ''"
            @click="goPage(item.pushName)"
          >
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="footer">
      <p>COPYRIGHT © {{ year }} CandiceKuo Design All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'MainLayouts',
  components: {},
  data() {
    return {
      year: dayjs().year(),
      menuList: [
        {
          name: '作品集 Portfolio',
          pushName: 'Portfolio',
        },
        {
          name: '履歷表 Resume',
          pushName: 'Resume',
        },
      ],
    };
  },
  computed: {
    currentTab() {
      return this.$route.name;
    },
  },
  mounted() {},
  methods: {
    goPage(val) {
      if (val === this.currentTab) return;
      this.$router.push({ name: val });
    },
  },
};
</script>
<style lang="scss" scoped>
.bg {
  background-image: url(../assets/img/bg2.png);
}
.wp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;

  .header {
    height: calc((100vw - 240px) / 3.5);
    background-image: url(../assets/img/bg.jpg);
    background-size: cover;
    background-position: center 30px;
    background-repeat: no-repeat;
    background-color: #f3f4ee;

    .menu {
      color: $white;
      backdrop-filter: blur(2px);
      background-color: #8080801a;
      position: fixed;
      height: 44px;
      width: 100vw;
      z-index: 99999;

      ul {
        display: flex;
        flex-flow: row wrap;
        padding: 12px;
        background: rgba(0, 0, 0, 0.4);
        box-shadow: 0px -5px 12px $blue;
        position: fixed;
        width: 100vw;

        li {
          &.icon {
            margin-left: 65px;
          }
          span {
            padding: 4px 12px;
            transition: color 0.12s;
            &:hover {
              &:not(.icon) {
                cursor: pointer;
                color: $darkBlue;
                background: $yellow;
                border-radius: 50px;
              }
            }
          }

          &::after {
            content: '|';
            margin: 0 12px;
            color: $white;
          }
          &:last-child,
          &:first-child {
            &::after {
              content: '';
            }
          }
        }
      }
    }
  }

  .footer {
    text-align: center;
    font-size: 12px;
    padding: 6px 0;
    background: $brown;
    color: $lightGray;
  }
}
.is-active {
  color: $yellow;
}

// Extra small devices (portrait phones, less than 576px) xs
@media (max-width: 575.98px) {
  .wp .header {
    height: 225px;
    background-position: -249px 30px;
  }
  .wp .header .menu ul li {
    &.icon {
      margin-left: 0;
      &::after {
        margin: 0 8px 0 0;
      }
    }
    &::after {
      margin: 0 8px;
    }
  }
}

// Small devices (landscape phones, 576px and up) sm
@media (min-width: 576px) and (max-width: 767.98px) {
  .wp .header {
    height: calc((100vw - 240px) / 1.6);
  }
}

// Medium devices (tablets, 768px and up) md
@media (min-width: 768px) and (max-width: 991.98px) {
  .wp .header {
    height: calc((100vw - 240px) / 2.6);
  }
}

// Large devices (desktops, 992px and up) lg
@media (min-width: 992px) and (max-width: 1199.98px) {
  .wp .header {
    height: calc((100vw - 240px) / 2.8);
  }
}

// Extra large devices (large desktops, 1200px and up) xl
@media (min-width: 1200px) {
}
</style>
