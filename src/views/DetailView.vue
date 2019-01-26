<template>
  <div
    class="detail-view"
    v-if="task"
  >
    <form
      class="edit-task-form"
      v-on:submit.prevent="onEditTask"
    >
      <input
        class="title"
        id="edit-task"
        name="edit-task"
        :value="task.text"
      />
    </form>
    <form
      class="add-sub-task-form"
      v-on:submit.prevent="onAddSubTask"
    >
      <input
        class="input"
        id="add-sub-task"
        name="add-sub-task"
        :placeholder="placeholder"
      />
    </form>
    <div
      class="empty"
      v-if="subTasks.length === 0"
    >No Tasks</div>
    <div
      class="content"
      v-else
    >
      <task-item
        v-for="task in subTasks"
        :has-border="true"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
  <div
    class="empty"
    v-else
  >No Tasks</div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'detail-view',
  components: {
    TaskItem,
  },
  computed: {
    placeholder () {
      return `Add task to ${this.task.text}`;
    },
    subTasks () {
      const id = this.$route.params.id;
      return id ? this.$store.getters.subTasks(id) : [];
    },
    task () {
      const id = this.$route.params.id;
      return id ? this.$store.getters.task(id) : undefined;
    },
  },
  data () {
    return {
      isEditing: false,
    };
  },
  methods: {
    onAddSubTask (evt) {
      evt.preventDefault();
      const target = evt.target.querySelector('[name="add-sub-task"]');
      const value = target.value;
      this.$store.dispatch('addTask', { parentId: this.task.id, text: value });
      target.value = '';
    },
    onEditTask (evt) {
      evt.preventDefault();
      const target = evt.target.querySelector('[name="edit-task"]');
      const value = target.value;
      this.$store.dispatch('editTask', { id: this.task.id, text: value });
      target.value = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-view {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  padding: 20px;
}

.title {
  border: none;
  color: var(--font-color-primary);
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px;
  width: 100%;

  &:focus {
    color: var(--primary);
    outline: none;
  }
}

.add-sub-task-form {
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;
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

.empty {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

.container {
  display: flex;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
  padding: 30px 40px;
  width: 100%;
}

.content {
  max-width: var(--max-width);
  width: 100%;
}
</style>
