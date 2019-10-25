<template>
  <header class="header-bar">
    <div class="content-left">
      <slot name="content-left"></slot>
    </div>
    <div class="content-center">
      <slot name="content-center"></slot>
    </div>
    <div class="content-right">
      <slot name="content-right"></slot>
    </div>
  </header>
</template>

<script>
// import '@/compiled-icons/logo';

export default {
  name: 'HeaderBar',
};
</script>

<style lang="scss" scoped>
@import "node_modules/include-media/dist/_include-media.scss";

.header-bar {
  align-items: center;
  background-color: var(--header-bar-bg-color);
  border-bottom: var(--header-bar-border-color) solid 1px;
  box-shadow: var(--header-bar-box-shadow);
  color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  font-size: 1em;
  height: 46px;
  justify-content: space-between;
  margin: 0;
  padding: 0 0 0 15px;
  width: 100%;
  z-index: 10;
}

.content-left,
.content-center,
.content-right {
  align-items: center;
  display: flex;

  h1,
  h2 {
    font-size: 1em;
    font-weight: normal;
    margin: 0;
  }
}

@include media("<=tablet") {
  .header-bar {
    padding: 0 20px;
  }
}
</style>
