<template>
  <div :class="{'detail-view': true, 'is-open': isOpen}" v-if="task">
    <form class="edit-task-form" v-on:submit.prevent="onEditTask">
      <input class="title" id="edit-task" name="edit-task" :value="task.text" />
    </form>
    <form class="add-sub-task-form" v-on:submit.prevent="onAddSubTask">
      <input class="input" id="add-sub-task" name="add-sub-task" :placeholder="placeholder" />
    </form>
    <div class="empty" v-if="subTasks.length === 0">No Tasks</div>
    <div class="content" v-else>
      <task-item v-for="task in subTasks" :has-border="true" :key="task.id" :task="task" />
    </div>
  </div>
  <div class="empty" v-else>No Tasks</div>
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
    const id = this.$route.params.id;
    return {
      isOpen: id !== undefined,
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
  //transition: transform 3000ms ease;

  @media (max-device-width: 1024px) {
    background-color: var(--app-theme1);
    height: 100%;
    left: 0;
    padding: 0;
    position: absolute;
    top: 0;
    //transform: translate3d(100%, 0, 0);
    width: 100%;
    z-index: 1;

    /* &.is-open {
      transform: translate3d(0, 0, 0);
    } */
  }
}

.title {
  background-color: transparent;
  border: none;
  color: var(--text-color1);
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px;
  width: 100%;

  &:focus {
    color: var(--app-primary);
    outline: none;
  }

  @media (max-device-width: 1024px) {
    padding: 20px 20px 0;
  }
}

.add-sub-task-form {
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;
  width: 100%;

  @media (max-device-width: 1024px) {
    margin: 0 0 20px;
    padding: 0 20px;
  }
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
