<template>
  <div id="app">
    <header-bar>
      <template slot="content-left">
        <h1>Task Manager</h1>
      </template>
    </header-bar>
    <router-view />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';

export default {
  name: 'app',
  components: {
    HeaderBar,
  },
};
</script>

<style lang="scss">
@import "styles/main.scss";

#app {
  background-color: #f6f6f6;
}
</style>
