import _findIndex from 'lodash/findIndex';
import Vue from 'vue';
import Vuex from 'vuex';

import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    theme: 'dark',
  },
  mutations: {
    addData: (state, payload) => {
      state.tasks = payload.tasks;
    },
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
    init (state, payload) {
      const { tasks, theme } = payload;
      if (tasks) {
        state.tasks = payload.tasks;
      }
      if (theme) {
        state.theme = payload.theme;
      }
    },
    removeAllTasks (state, payload) {
      state.tasks = payload.tasks;
    },
    removeTask (state, payload) {
      state.tasks = state.tasks.filter(task => {
        return task.id !== payload.id && task.parentId !== payload.id;
      });
    },
    setTheme (state, payload) {
      state.theme = payload;
    },
  },
  actions: {
    async addData (context, payload) {
      const data = await api.addData(payload);
      context.commit('addData', data);
    },
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
    async removeAllTasks (context) {
      const tasks = await api.removeAllTasks();
      context.commit('removeAllTasks', { tasks });
    },
    async setTheme (context, payload) {
      await api.setTheme(payload);
      context.commit('setTheme', payload);
    },
  },
  getters: {
    state: state => {
      return state;
    },
    subTasks: state => id => {
      return state.tasks.filter(task => task.parentId === id);
    },
    task: state => id => {
      return state.tasks.filter(task => task.id === id)[0];
    },
    tasks: state => {
      return state.tasks.filter(task => task.parentId === undefined);
    },
    theme: state => {
      return state.theme;
    },
  },
});
