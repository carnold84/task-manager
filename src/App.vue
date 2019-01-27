<template>
  <div id="app">
    <router-view name="list" />
    <router-view name="details" />
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style lang="scss">
@import "styles/main.scss";

#app {
  background-color: #ffffff;
  color: var(--font-color-primary);
  display: flex;
  height: 100%;
  font-family: var(--font-family-primary);
  font-size: 15px;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
</style>
