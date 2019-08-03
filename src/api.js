import _findIndex from 'lodash/findIndex';
import localforage from 'localforage';
import uuidV4 from 'uuid/v4';

localforage.config({
  name: 'task-manager',
  version: 1.0,
  storeName: 'task_manager',
});

const getTasks = async () => {
  let tasks = null;

  await localforage.getItem('tasks', (err, value) => {
    if (err) {
      console.error(err);
    }
    tasks = value;
  });

  return tasks;
};

const setTasks = async tasks => {
  let success = true;

  await localforage.setItem('tasks', tasks, (err) => {
    if (err) {
      success = false;
    }
  });

  return success;
};

const setTheme = async theme => {
  let success = true;

  await localforage.setItem('theme', theme, (err) => {
    if (err) {
      success = false;
    }
  });

  return success;
};

const getTheme = async () => {
  let theme = null;

  await localforage.getItem('theme', (err, value) => {
    if (err) {
      console.error(err);
    }
    theme = value;
  });

  return theme;
};

const api = {
  async addData (payload) {
    let tasks = await getTasks();

    tasks.push(...payload.tasks);

    await setTasks(tasks);

    return { tasks };
  },
  async addTask (payload) {
    let tasks = await getTasks();

    const date = Date.now();

    const task = {
      ...payload,
      created: date,
      id: uuidV4(),
      modified: date,
    };

    tasks.push(task);

    await setTasks(tasks);

    return task;
  },
  async editTask (payload) {
    let tasks = await getTasks();

    const idx = _findIndex(tasks, task => task.id === payload.id);
    let task = tasks[idx];

    task = {
      ...task,
      ...payload,
      modified: Date.now(),
    };
    tasks[idx] = task;

    await setTasks(tasks);

    return task;
  },
  async init () {
    let tasks = await getTasks();
    let theme = await getTheme();

    if (tasks === null) {
      tasks = [];
      await setTasks(tasks);
    }

    return {
      tasks,
      theme,
    };
  },
  async removeAllTasks () {
    setTasks([]);

    return [];
  },
  async removeTask (payload) {
    let tasks = await getTasks();

    let newTasks = tasks.filter(task => {
      return task.id !== payload.id && task.parentId !== payload.id;
    });

    await setTasks(newTasks);

    return payload.id;
  },
  async setTheme (payload) {
    await setTheme(payload);

    return payload;
  },
};

export default api;
