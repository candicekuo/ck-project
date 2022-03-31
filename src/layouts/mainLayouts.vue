<template>
  <div class="wp">
    <header class="header">
      <nav class="menu">
        <ul>
          <li
            v-for="item in menuList"
            :key="item.label"
            :class="currentTab === item.label ? 'is-active' : ''"
            @click="goPage(item.pushName)"
          >{{ item.label }}</li>
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
          label: 'Portfolio',
          pushName: 'Portfolio',
        },
        {
          label: 'Resume',
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
  methods: {
    goPage(val) {
      if (val === this.currentTab) return;
      this.$router.push({ name: val });
    },
  },
};
</script>
<style lang="scss" scoped>
.wp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;

  .header {
    height: calc((100vw - 240px) / 3.5);
    background-image: url(../assets/bg.jpg);
    background-size: cover;
    background-position: center 30px;
    background-repeat: no-repeat;

    .menu {
      color: $white;
      backdrop-filter: blur(2px);
      background-color: #8080801a;
      position: fixed;
      height: 42px;
      width: 100vw;
      z-index: 99999;

      ul {
        display: flex;
        flex-flow: row wrap;
        padding: 12px;
        background: rgba(172, 208, 250, 0.4);
        box-shadow: 0px -5px 12px $blue;
        position: fixed;
        width: 100vw;

        li {
          padding: 0 12px;
          cursor: pointer;
          transition: color 0.12s;
          &:hover {
            color: $darkBlue;
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
  color: $darkBlue;
}
</style>
