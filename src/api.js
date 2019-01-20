import _findIndex from 'lodash/findIndex';
import uuidV4 from 'uuid/v4';

const getData = () => {
  let data = localStorage.getItem('task-manager');
  return data ? JSON.parse(data) : null;
};

const setData = data => {
  return localStorage.setItem('task-manager', JSON.stringify(data));
};

const api = {
  addTask (payload) {
    let data = getData();

    const task = {
      ...payload,
      id: uuidV4(),
    };

    data.tasks.push(task);

    setData(data);

    return task;
  },
  editTask (payload) {
    let data = getData();

    const idx = _findIndex(data.tasks, task => task.id === payload.id);
    let task = data.tasks[idx];
    task = {
      ...task,
      ...payload,
    };
    data.tasks[idx] = task;

    setData(data);

    return task;
  },
  getTasks: () => {
    const data = getData();
    return data.tasks;
  },
  init: () => {
    let data = getData();

    if (data === null) {
      data = {
        tasks: [],
      };
      setData(data);
    }

    return data;
  },
  removeTask (payload) {
    let data = getData();

    let newData = {
      ...data,
      tasks: data.tasks.filter(task => {
        return task.id !== payload.id;
      }),
    };

    setData(newData);

    return payload.id;
  },
};

export default api;
