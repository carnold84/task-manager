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
        :key="task.id"
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
    tasks () {
      return this.$store.getters.tasks;
    },
  },
  methods: {
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
  border-right: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 30%;
}

.container {
  border-right: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  overflow: auto;
  width: 30%;
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
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  color: var(--font-color-primary);
  height: 46px;
  padding: 0 14px;

  &:focus {
    border: 1px solid #cccccc;
    outline: none;
  }

  &::placeholder {
    color: var(--font-color-secondary);
  }
}
</style>
