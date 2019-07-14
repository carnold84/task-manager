<template>
  <span
    class="ui-checkbox"
    v-on:click="onToggle"
  >
    <span class="inner" />
  </span>
</template>

<script>
export default {
  name: 'UiCheckbox',
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
    onToggle: {
      type: Function,
      default: null,
    },
  },
  methods: {
    click (evt) {
      if (this.onToggle) {
        this.onToggle(evt);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-checkbox {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
  width: 50px;

  .inner {
    background-color: var(--checkbox-bg-color);
    border: 1px solid var(--checkbox-border-color);
    border-radius: 9px;
    height: 18px;
    width: 18px;
  }

  &:hover {
    .inner {
      background-color: var(--checkbox-bg-color__HOVER);
      border: 1px solid var(--checkbox-border-color__HOVER);
    }
  }

  .is-checked & {
    .inner {
      background-color: var(--checkbox-bg-color__CHECKED);
      border: 1px solid var(--checkbox-border-color__CHECKED);
    }
  }
}
</style>
