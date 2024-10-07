/**
 * note: อาจได้ใช้นอกเหนือจาก kanbanboard
 */
const taskStore = {
  state: {
    taskList: [],
    selectedTask: {},
    taskStatuses: [],
  },
  mutations: {
    SET_TASK_LIST(state, taskList) {
      state.taskList = taskList;
    },
    SET_SELECTED_TASK(state, selectedTask) {
      state.selectedTask = selectedTask;
    },
    SET_TASK_STATUSES(state, taskStatuses) {
      state.taskStatuses = taskStatuses;
    },
    ADD_TASK(state, newTask) {
      state.taskList.push(newTask);
    },
    EDIT_TASK(state, updatedTask) {
      const index = state.taskList.findIndex(
        (task) => task.id === updatedTask.id
      );
      if (index !== -1) {
        state.taskList.splice(index, 1, updatedTask);
      }
    },
    DELETE_TASK(state, id) {
      const index = state.taskList.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.taskList.splice(index, 1);
      }
    },
  },
  actions: {
    updateTaskList({ commit }, taskList) {
      commit("SET_SELECTED_TASK", {});
      commit("SET_TASK_LIST", taskList);
    },
    updateTask({ commit }, { taskData, id }) {
      const updatedData = { ...this.getters.getTaskById(id), ...taskData };
      commit("EDIT_TASK", updatedData);
      commit("SET_SELECTED_TASK", this.getters.getTaskById(id));
    },
    updateTaskStatuses({ commit }, taskStatuses) {
      commit("SET_TASK_STATUSES", taskStatuses);
    },
    addNewTask({ commit }, newTask) {
      commit("ADD_TASK", newTask);
      commit("SET_SELECTED_TASK", newTask);
    },
    removeTask({ commit }, id) {
      commit("DELETE_TASK", id);
      commit("SET_SELECTED_TASK", {});
    },
  },
  getters: {
    getTaskList: (state) => state.taskList,
    getTaskListByStatus: (state) => (status) =>
      state.taskList.filter((task) => task.status === status),
    getTaskById: (state) => (id) =>
      state.taskList.find((task) => task.id === id),
    getSelectedTask: (state) => state.selectedTask,
    getTaskStatuses: (state) => state.taskStatuses,
  },
};

export default taskStore;
