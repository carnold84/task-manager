<template>
  <div class="list-view">
    <form
      class="add-task-form"
      v-on:submit.prevent="onAddTask"
    >
      <input
        class="input"
        id="add-task"
        name="add-task"
        placeholder="Add Task"
      />
    </form>
    <div
      class="empty"
      v-if="tasks.length === 0"
    >No Tasks</div>
    <div
      class="content"
      v-else
    >
      <task-item
        v-for="task in tasks"
        :has-border="true"
        :isSelected="selectedId === task.id"
        :key="task.id"
        :link="getTaskLink(task)"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'list-view',
  components: {
    TaskItem,
  },
  computed: {
    selectedId () {
      return this.$route.params.id;
    },
    tasks () {
      return this.$store.getters.tasks;
    },
  },
  methods: {
    getTaskLink (task) {
      return `/${task.id}`;
    },
    onAddTask (evt) {
      evt.preventDefault();
      const target = evt.target.querySelector('[name="add-task"]');
      const value = target.value;
      this.$store.dispatch('addTask', { text: value });
      target.value = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.list-view {
  background-color: var(--list-view-bg-color);
  border-right: 1px solid var(--list-view-border-color);
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 30%;

  @media (max-device-width: 1024px) {
    height: 100%;
    left: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }
}

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
}

.empty {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

.add-task-form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
}

.input {
  background-color: var(--text-field-bg-color);
  border: 1px solid var(--text-field-border-color);
  border-radius: 3px;
  color: var(--text-field-text-color);
  height: 46px;
  padding: 0 14px;

  &:focus {
    background-color: var(--text-field-bg-color__FOCUSED);
    border: 1px solid var(--text-field-border-color__FOCUSED);
    outline: none;
  }

  &::placeholder {
    color: var(--text-field-placeholder-text-color);
  }
}
</style>
