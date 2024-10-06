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
    FIX_TASK(state, updatedTask) {
      const index = state.taskList.findIndex(
        (task) => task.id === updatedTask.id
      );
      if (index !== -1) {
        state.taskList.splice(index, 1, updatedTask);
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
      commit("FIX_TASK", updatedData);
      commit("SET_SELECTED_TASK", this.getters.getTaskById(id));
    },
    updateTaskStatuses({ commit }, taskStatuses) {
      commit("SET_TASK_STATUSES", taskStatuses);
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
