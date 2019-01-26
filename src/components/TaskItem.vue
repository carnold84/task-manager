<template>
  <div
    :class="{'task-item': true, 'is-checked': task.checked, 'is-hovered': isHovered}"
    ref="taskRoot"
    v-on:mouseout="onMouseOut"
    v-on:mouseover="onMouseOver"
  >
    <div class="main">
      <div class="controls-left">
        <span
          class="checkbox"
          v-on:click="onToggleCheck"
        >
          <span class="inner" />
        </span>
      </div>
      <router-link
        class="text"
        :to="link"
      >{{task.text}}</router-link>
      <div class="controls-right">
        <icon-button :onClick="onDelete">
          <delete-icon />
        </icon-button>
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format';

import DeleteIcon from '@/components/icons/Delete.vue';
import IconButton from '@/components/IconButton.vue';

export default {
  name: 'TaskItem',
  components: {
    DeleteIcon,
    IconButton,
  },
  computed: {
    created () {
      return `Created: ${format(this.task.created, 'DD/MM/YYYY')}`;
    },
    modified () {
      return `Modified: ${format(this.task.modified, 'DD/MM/YYYY')}`;
    },
    link () {
      return `/${this.task.id}`;
    },
  },
  data () {
    return {
      isHovered: false,
    };
  },
  methods: {
    onDelete (evt) {
      this.$store.dispatch('removeTask', { id: this.task.id });
    },
    onMouseOver () {
      this.isHovered = true;
    },
    onMouseOut () {
      this.isHovered = false;
    },
    onToggleCheck () {
      this.$store.dispatch('editTask', { id: this.task.id, checked: !this.task.checked });
    },
  },
  props: {
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
  overflow: hidden;
  padding: 0;
  width: 100%;

  &:first-child {
    border-top: #eeeeee solid 1px;
  }

  &:hover {
    background-color: #f9f9f9;
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

.checkbox {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
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
  color: #222222;
  display: flex;
  flex-grow: 1;
  font-family: var(--font-family-primary);
  font-size: 14px;
  font-weight: 700;
  height: 100%;
  margin: 0;
  line-height: 20px;
  padding: 18px 0;

  .is-checked & {
    color: #888888;
    text-decoration: line-through;
  }

  &:hover {
    color: #1e70ce;
  }
}

.controls-right {
  align-items: center;
  display: flex;
  height: 100%;
  visibility: hidden;

  .is-hovered & {
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
</style>
