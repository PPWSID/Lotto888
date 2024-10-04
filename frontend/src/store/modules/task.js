/**
 * note: อาจได้ใช้นอกเหนือจาก kanbanboard
 */
const taskStore = {
  state: {
    taskList: [],
    selectedTask: {},
    taskStatuses: ["todo", "block", "inProgress", "inReview", "done"],
  },
  mutations: {
    setTaskList(state, taskList) {
      state.taskList = taskList;
    },
    setSelectedTask(state, selectedTask) {
      state.selectedTask = selectedTask;
    },
    addTask(state, newTask) {
      state.taskList.push(newTask);
    },
    modifyTask(state, updatedTask) {
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
      commit("setTaskList", taskList);
    },
    updateTask({ commit }, { taskData, id }) {
      const updatedData = { ...this.getters.getTaskById(id), ...taskData };
      commit("modifyTask", updatedData);
      commit("setSelectedTask", this.getters.getTaskById(id));
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
