<template>
  <div
    :class="{'task-item': true, 'is-checked': task.checked, 'is-selected': isSelected}"
    ref="taskRoot"
  >
    <div class="main">
      <div class="controls-left">
        <ui-checkbox :onToggle="onToggleCheck" :isChecked="task.checked" />
      </div>
      <router-link class="text" :to="link" v-if="link">{{task.text}}</router-link>
      <form class="edit-task-form" v-else v-on:blur="onEditTask" v-on:submit.prevent="onEditTask">
        <input class="text" name="edit-task" :value="task.text" />
      </form>
      <div class="controls-right">
        <icon-button :onClick="onDelete">
          <v-icon>delete</v-icon>
        </icon-button>
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format';

import IconButton from '@/components/IconButton.vue';
import UiCheckbox from '@/components/UiCheckbox';

export default {
  name: 'TaskItem',
  components: {
    IconButton,
    UiCheckbox,
  },
  computed: {
    created () {
      return `Created: ${format(this.task.created, 'DD/MM/YYYY')}`;
    },
    modified () {
      return `Modified: ${format(this.task.modified, 'DD/MM/YYYY')}`;
    },
  },
  methods: {
    onDelete (evt) {
      this.$store.dispatch('removeTask', { id: this.task.id });

      if (!this.task.parentId) {
        this.$router.push('/');
      }
    },
    onEditTask (evt) {
      evt.preventDefault();
      const target = evt.target.querySelector('[name="edit-task"]');
      const value = target.value;
      this.$store.dispatch('editTask', { id: this.task.id, text: value });
      target.blur();
    },
    onToggleCheck () {
      this.$store.dispatch('editTask', {
        id: this.task.id,
        checked: !this.task.checked,
      });
    },
  },
  props: {
    isSelected: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
    },
    task: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.task-item {
  background-color: var(--task-item-bg-color);
  border-bottom: var(--task-item-border-color) solid 1px;
  border-left: 3px solid transparent;
  flex-direction: column;
  flex-shrink: 0;
  display: flex;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;

  &:first-child {
    border-top: var(--task-item-border-color) solid 1px;
  }

  &:hover {
    background-color: var(--task-item-bg-color__HOVER);

    .controls-right {
      visibility: visible;
    }
  }

  &.is-selected {
    border-left: 3px solid var(--app-primary);

    a {
      color: var(--app-primary);
    }
  }
}

.main {
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 100%;
}

.text {
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--text-color1);
  display: flex;
  flex-grow: 1;
  font-family: var(--font-family-primary);
  font-size: 14px;
  font-weight: 700;
  height: 100%;
  margin: 0;
  line-height: 20px;
  padding: 12px 10px 12px 0;
  width: 100%;

  .is-checked & {
    color: var(--task-item-text-color__COMPLETED);
    text-decoration: line-through;
  }

  &:focus {
    color: var(--app-primary);
    outline: none;
  }
}

.edit-task-form {
  flex-grow: 1;
}

.edit-task {
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--text-color1);
  display: flex;
  flex-grow: 1;
  font-family: var(--font-family-primary);
  font-size: 14px;
  font-weight: 700;
  height: 100%;
  margin: 0;
  line-height: 20px;
  padding: 12px 10px 12px 0;
  width: 100%;

  .is-checked & {
    color: var(--task-item-text-color__COMPLETED);
    text-decoration: line-through;
  }

  &:focus {
    color: var(--app-primary);
    outline: none;
  }
}

.controls-right {
  align-items: center;
  display: flex;
  height: 100%;
  visibility: hidden;

  .v-icon {
    color: var(--task-item-icon-fill);

    &:hover {
      color: var(--task-item-icon-fill__HOVER);
    }
  }

  & > * {
    margin: 0 0 0 10px;
  }
}

.controls-left {
  align-items: center;
  display: flex;
  height: 100%;
}
</style>
