<template>
  <button
    v-if="isButton"
    v-on:click="click"
    :class="{'icon-button': true}"
    :style="style"
  >
    <slot></slot>
  </button>
  <div
    v-else
    :class="{'icon-button': true}"
    :style="style"
    v-on:click="click"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    isButton: {
      type: Boolean,
      default: true,
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
  computed: {
    style () {
      return {
        height: `${this.height}px`,
      };
    },
  },
  methods: {
    click (evt) {
      if (this.onClick) {
        this.onClick(evt);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-button {
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  fill: inherit;
  height: 100%;
  padding: 0 12px;

  &:hover {
    fill: var(--primary);
  }
}
</style>
