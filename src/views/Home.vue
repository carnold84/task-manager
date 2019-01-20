<template>
  <div class="home">
    <div class="container">
      <div class="content">
        <form
          class="add-task-form"
          v-on:submit.prevent="onAddTask"
        >
          <text-field
            label="Add Task"
            name="add-task"
          ></text-field>
          <div class="button-container">
            <ui-button>Save</ui-button>
          </div>
        </form>
        <div
          class="no-tasks"
          v-if="tasks.length === 0"
        >No Tasks</div>
        <div v-else>
          <task-item
            v-for="task in tasks"
            :has-border="true"
            :key="task.id"
            :subTasks="getSubTasks(task.id)"
            :task="task"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';
import TextField from '@/components/TextField.vue';
import UiButton from '@/components/UiButton.vue';

export default {
  name: 'home',
  components: {
    TaskItem,
    TextField,
    UiButton,
  },
  computed: {
    tasks () {
      return this.$store.getters.tasks;
    },
  },
  methods: {
    getSubTasks (id) {
      return this.$store.getters.subTasks(id);
    },
    onAddTask (evt) {
      evt.preventDefault();
      const value = evt.target.querySelector('[name="add-task"]').value;
      this.$store.dispatch('addTask', { text: value });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-task-form {
  align-items: center;
  display: flex;
  width: 100%;
}
.button-container {
  margin: 0 0 0 20px;
}
.container {
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 30px 40px;
  width: 100%;
}
.content {
  max-width: var(--max-width);
  width: 100%;
}
.no-tasks {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
}
</style>
