<template>
  <div class="wp">
    <header class="header">
      <!-- menu -->
      <nav class="menu">menu</nav>
      header
    </header>
    <main>
      <p>
        {{ test }}
      </p>
      <router-view />
    </main>
    <footer class="footer">
      <p>COPYRIGHT © {{ year }} CandiceKuo Design All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
// import selectMixins from 'mixins/select';
// import CustomDialog from 'components/CustomDialog';
import dayjs from 'dayjs';

export default {
  name: 'MainLayouts',
  components: {},
  data() {
    return {
      test: 'hello',
      year: dayjs().year(),
    };
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
    height: calc((100vw - 240px) / 3.52);
    background: $main;

    .menu {
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
</style>
