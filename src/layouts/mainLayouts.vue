<template>
  <div class="app">
    <header>
      <!-- menu -->
    </header>
    <main>
      <p>
        {{ test }}
      </p>
      <router-view />
    </main>
    <footer class="footer">
      <p>Copyright © {{ year }} Candice. All rights reserved.</p>
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
.app {
  .footer {
  }
}
p {
  color: $mainColor;
}
</style>
