import axios from "axios";

// mock api
const BASE_URL = "https://66eb9e522b6cf2b89c5b1529.mockapi.io";

const projectStore = {
  state: {
    taskList: [],
    selectedTask: {},
    taskStatuses: ["Pending", "Doing", "Done"],
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
    async fetchTaskList({ commit }) {
      try {
        const response = await axios.get(`${BASE_URL}/todos`);
        commit("setTaskList", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSelectedTask({ commit }, taskId) {
      try {
        const response = await axios.get(`${BASE_URL}/todos/${taskId}`);
        commit("setSelectedTask", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addTask({ commit }, newTask) {
      const bodyData = {
        name: newTask.name,
        status: newTask.status,
      };
      try {
        const response = await axios.post(`${BASE_URL}/todos`, bodyData);
        commit("addTask", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateTask(_, { taskData, id }) {
      try {
        await axios.put(`${BASE_URL}/todos/${id}`, taskData);
      } catch (error) {
        console.error(error);
      }
    },
    async removeTask(_, id) {
      try {
        await axios.delete(`${BASE_URL}/todos/${id}`);
      } catch (error) {
        console.log(error);
      }
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

export default projectStore;
