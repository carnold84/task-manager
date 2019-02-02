<template>
  <div id="app">
    <header-bar>
      <template slot="content-left">Task Manager</template>
    </header-bar>
    <div class="app-content">
      <router-view name="list" />
      <router-view name="details" />
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';

export default {
  name: 'app',
  components: {
    HeaderBar,
  },
  mounted () {
    this.$store.dispatch('init');
  },
};
</script>

<style lang="scss">
@import "styles/main.scss";

#app {
  background-color: #ffffff;
  color: var(--font-color-primary);
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: var(--font-family-primary);
  font-size: 15px;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.app-content {
  display: flex;
  flex-grow: 1;
}
</style>
