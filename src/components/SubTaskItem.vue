<template>
  <div class="sub-task-item">
    <div class="content">
      <div class="controls">
      </div>
      <p class="title">{{subTask.text}}</p>
      <div class="controls">
        <UiButton :onClick="onDelete">Remove</UiButton>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton.vue';

export default {
  name: 'SubTaskItem',
  components: {
    UiButton,
  },
  methods: {
    onDelete (evt) {
      evt.preventDefault();
      this.$store.dispatch('removeTask', { id: this.subTask.id });
    },
  },
  props: {
    subTask: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-task-item {
  border-bottom: var(--app-theme2) solid 1px;
  flex-direction: column;
  flex-shrink: 0;
  display: flex;
  margin: 0;
  width: 100%;

  &:first-child {
    border-top: var(--app-theme2) solid 1px;
  }
}
.content {
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;
  display: flex;
  height: 50px;
  justify-content: space-between;
  margin: 0;
  width: 100%;
}
.title {
  flex-grow: 1;
  padding: 20px;
}
.controls {
  display: flex;

  & > * {
    margin: 0 0 0 10px;
  }
}
h1 {
  font-size: 1.1em;
  font-weight: normal;
  color: var(--text-color1);
  margin: 0;
}
h2 {
  font-size: 1.2em;
  font-weight: normal;
  margin: 0;
}
</style>
