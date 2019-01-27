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

const api = {
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
    let data = await getTasks();

    const idx = _findIndex(data.tasks, task => task.id === payload.id);
    let task = data.tasks[idx];

    task = {
      ...task,
      ...payload,
      modified: Date.now(),
    };
    data.tasks[idx] = task;

    await setTasks(data);

    return task;
  },
  async init () {
    let tasks = await getTasks();

    if (tasks === null) {
      tasks = [];
      await setTasks(tasks);
    }

    return {
      tasks,
    };
  },
  async removeTask (payload) {
    let tasks = await getTasks();

    let newTasks = tasks.filter(task => {
      return task.id !== payload.id && task.parentId !== payload.id;
    });

    await setTasks(newTasks);

    return payload.id;
  },
};

export default api;
