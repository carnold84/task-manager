<template>
  <div class="home">
    <header-bar>
      <template slot="content-left">
        <h1>Task Manager</h1>
      </template>
    </header-bar>
    <div class="container">
      <div class="tasks">
        <form
          class="add-task-form"
          v-on:submit.prevent="onAddTask"
        >
          <label
            class="label"
            for="add-task"
          >Add Task</label>
          <input
            class="input"
            id="add-task"
            name="add-task"
          />
        </form>
        <div
          class="empty"
          v-if="tasks.length === 0"
        >No Tasks</div>
        <div
          class="tasks-content"
          v-else
        >
          <task-item
            v-for="task in tasks"
            :has-border="true"
            :key="task.id"
            :subTasks="getSubTasks(task.id)"
            :task="task"
          />
        </div>
      </div>
      <div class="task-details">
        <div
          class="empty"
          v-if="selectedTask === null"
        >No task is selected</div>
        <div
          class="task-details-content"
          v-else
        >
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'home',
  components: {
    HeaderBar,
    TaskItem,
  },
  computed: {
    tasks () {
      return this.$store.getters.tasks;
    },
  },
  data () {
    console.log(this.$route.params.id);
    return {
      selectedTask: null,
    };
  },
  methods: {
    getSubTasks (id) {
      return this.$store.getters.subTasks(id);
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
.home {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.container {
  display: flex;
  flex-grow: 1;
  z-index: 0;
}

.tasks {
  border-right: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  overflow: auto;
  width: 30%;
}

.task-details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.tasks-content {
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

.label {
  color: #666666;
  margin: 0 0 5px 0;
}

.input {
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  color: #222222;
  height: 46px;
  padding: 0 14px;

  &:focus {
    border: 1px solid #cccccc;
    outline: none;
  }

  &::placeholder {
    color: #a7bcd5;
  }
}

.content {
  max-width: var(--max-width);
  width: 100%;
}
</style>
