<template>
  <div
    :class="{'task-item': true, 'is-checked': task.checked}"
    ref="taskRoot"
    v-on:mouseout="onMouseOut"
    v-on:mouseover="onMouseOver"
  >
    <div class="content">
      <div class="controls-left">
        <UiButton
          :onClick="onToggleOpen"
          v-if="subTasks !== undefined"
        >+</UiButton>
        <span
          class="checkbox"
          v-on:click="onToggleCheck"
        >
          <span class="inner" />
        </span>
      </div>
      <form
        class="edit-task-form"
        v-click-outside="onClickOutside"
        v-if="isEditing"
        v-on:submit.prevent="onEditTask"
      >
        <input
          class="edit-text"
          name="edit-task"
          :value="task.text"
        />
      </form>
      <p
        class="text"
        v-else
        v-on:click="onBeginEdit"
      >{{task.text}}</p>
      <p class="date">{{created}}</p>
      <p class="date">{{modified}}</p>
      <div :class="{'controls-right': true, 'show': showControls}">
        <UiButton :onClick="onDelete">Remove</UiButton>
      </div>
    </div>
    <div
      class="sub-tasks-container"
      v-if="isVisible && subTasks !== undefined"
    >
      <form
        class="add-task-form"
        v-on:submit.prevent="onAddSubTask"
      >
        <text-field
          :label="subTaskTextLabel"
          name="add-sub-task"
        ></text-field>
        <div class="button-container">
          <ui-button>Save</ui-button>
        </div>
      </form>
      <div class="sub-tasks">
        <task-item
          v-for="subTask in subTasks"
          :key="subTask.id"
          :task="subTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format';

import TaskItem from '@/components/TaskItem.vue';
import TextField from '@/components/TextField.vue';
import UiButton from '@/components/UiButton.vue';

export default {
  name: 'TaskItem',
  components: {
    TaskItem,
    TextField,
    UiButton,
  },
  computed: {
    created () {
      return `Created: ${format(this.task.created, 'DD/MM/YYYY')}`;
    },
    modified () {
      return `Modified: ${format(this.task.modified, 'DD/MM/YYYY')}`;
    },
    subTaskTextLabel () {
      return `Add Task to ${this.task.text}`;
    },
  },
  data () {
    return {
      isVisible: false,
      isEditing: false,
      showControls: false,
    };
  },
  methods: {
    onAddSubTask (evt) {
      const value = evt.target.querySelector('[name="add-sub-task"]').value;
      this.$store.dispatch('addTask', { parentId: this.task.id, text: value });
    },
    onBeginEdit (evt) {
      this.isEditing = true;
      setTimeout(() => {
        this.$refs.taskRoot.querySelector('[name="edit-task"').focus();
      }, 100);
    },
    onClickOutside (event, el) {
      this.isEditing = false;
    },
    onDelete (evt) {
      this.$store.dispatch('removeTask', { id: this.task.id });
    },
    onEditTask (evt) {
      const value = evt.target.querySelector('[name="edit-task"]').value;
      this.$store.dispatch('editTask', { id: this.task.id, text: value });
      this.isEditing = false;
    },
    onMouseOut () {
      this.showControls = false;
    },
    onMouseOver () {
      this.showControls = true;
    },
    onToggleCheck () {
      this.$store.dispatch('editTask', { id: this.task.id, checked: !this.task.checked });
    },
    onToggleOpen () {
      this.isVisible = !this.isVisible;
    },
  },
  props: {
    subTasks: {
      type: Array,
      default () {
        return undefined;
      },
    },
    task: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.task-item {
  border-bottom: #eeeeee solid 1px;
  flex-direction: column;
  flex-shrink: 0;
  display: flex;
  margin: 0;
  width: 100%;

  &:first-child {
    border-top: #eeeeee solid 1px;
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
.checkbox {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 0 0 10px;
  width: 50px;

  .inner {
    border: 1px solid #cccccc;
    border-radius: 9px;
    height: 18px;
    width: 18px;
  }

  .is-checked & {
    .inner {
      background-color: #1e70ce;
      border: 1px solid #1e70ce;
    }
  }
}
.text {
  align-items: center;
  display: flex;
  flex-grow: 1;
  font-family: var(--font-family-primary);
  font-size: 14px;
  height: 100%;

  .is-checked & {
    color: #888888;
    text-decoration: line-through;
  }
}
.date {
  color: #888888;
  padding: 0 20px;
}
.edit-task-form {
  flex-grow: 1;
  height: 100%;
}
.edit-text {
  font-family: var(--font-family-primary);
  font-size: 14px;
  height: 100%;
  padding: 0 18px;
  width: 100%;
}
.add-task-form {
  align-items: center;
  display: flex;
  width: 100%;
}
.button-container {
  margin: 0 0 0 20px;
}
.sub-tasks-container {
  padding: 20px;
  width: 100%;
}
.sub-tasks {
  width: 100%;
}
.controls-right {
  align-items: center;
  display: flex;
  height: 100%;
  visibility: hidden;

  &.show {
    visibility: visible;
  }

  & > * {
    margin: 0 0 0 10px;
  }
}
.controls-left {
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0 10px 0 0;
}
h1 {
  font-size: 1.1em;
  font-weight: normal;
  color: #ffffff;
  margin: 0;
}
h2 {
  font-size: 1.2em;
  font-weight: normal;
  margin: 0;
}
</style>
