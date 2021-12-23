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
          >
            {{ item.label }}
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
    // height: calc((100vw - 240px) / 3.52);
    height: calc(100vw / 4);
    background: $main;
    background-image: url(../assets/bg.jpg);
    background-size: cover;
    background-position: center;

    .menu {
      color: $lightGray;
      backdrop-filter: blur(2px);
      background-color: #0000001a;
      position: fixed;
      height: 42px;
      width: 100vw;

      ul {
        display: flex;
        flex-flow: row wrap;
        padding: 12px;
        background: rgba(150, 150, 150, 0.7);
        box-shadow: 2px 2px 10px #333;
        position: fixed;
        width: 100vw;

        li {
          padding: 0 12px;
          cursor: pointer;
          transition: color 0.12s;
          &:hover {
            color: $white;
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
  color: $white;
}
</style>
