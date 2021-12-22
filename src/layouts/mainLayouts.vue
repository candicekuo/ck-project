<template>
  <div>
    <header></header>
    <main>
      <router-view />
    </main>
    <footer></footer>
    <p>
      {{ test }}
    </p>
  </div>
</template>

<script>
// import selectMixins from 'mixins/select';
// import CustomDialog from 'components/CustomDialog';

export default {
  name: 'MainLayouts',
  components: {},
  data() {
    return {
      test: 'hello',
    };
  },
};
</script>
