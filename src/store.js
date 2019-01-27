import _findIndex from 'lodash/findIndex';
import Vue from 'vue';
import Vuex from 'vuex';

import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    addTask: (state, payload) => {
      state.tasks.push(payload);
    },
    editTask: (state, payload) => {
      const idx = _findIndex(state.tasks, task => task.id === payload.id);
      let task = state.tasks[idx];
      task = {
        ...task,
        ...payload,
      };
      state.tasks.splice(idx, 1, task);
    },
    removeTask (state, payload) {
      state.tasks = state.tasks.filter(task => {
        return task.id !== payload.id && task.parentId !== payload.id;
      });
    },
    init (state, payload) {
      state.tasks = payload.tasks;
    },
  },
  actions: {
    async addTask (context, payload) {
      const task = await api.addTask(payload);
      context.commit('addTask', task);
    },
    async editTask (context, payload) {
      const task = await api.editTask(payload);
      context.commit('editTask', task);
    },
    async init (context) {
      const data = await api.init();
      context.commit('init', data);
    },
    async removeTask (context, payload) {
      await api.removeTask(payload);
      context.commit('removeTask', payload);
    },
  },
  getters: {
    subTasks: state => id => {
      return state.tasks.filter(task => task.parentId === id);
    },
    task: state => id => {
      return state.tasks.filter(task => task.id === id)[0];
    },
    tasks: state => {
      return state.tasks.filter(task => task.parentId === undefined);
    },
  },
});
