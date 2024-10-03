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
  },
  actions: {
    updateTaskList({ commit }, taskList) {
      commit("setTaskList", taskList);
    },
  },
  getters: {
    getTaskList: (state) => state.taskList,
    getTaskListByStatus: (state) => (status) =>
      state.taskList.filter((task) => task.status === status),
    getSelectedTask: (state) => state.selectedTask,
    getTaskStatuses: (state) => state.taskStatuses,
  },
};

export default taskStore;
