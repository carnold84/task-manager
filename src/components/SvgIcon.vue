<template>
  <svg
    class="svg-icon"
    :height="size"
    viewBox="0 0 24 24"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    size: {
      type: String,
      default: '24px',
    },
  },
};
</script>

<style lang="scss" scoped>
.svg-icon {
  fill: inherit;
}
</style>
