import axios from "axios";

// mock api
const BASE_URL = "https://66eb9e522b6cf2b89c5b1529.mockapi.io";

const projectStore = {
  state: {
    projectList: [],
    selectedProject: {},
    projectStatuses: [],
  },
  mutations: {
    SET_PROJECT_LIST(state, projectList) {
      state.projectList = projectList;
    },
    SET_SELECTED_PROJECT(state, selectedProject) {
      state.selectedProject = selectedProject;
    },
    ADD_PROJECT(state, newProject) {
      state.projectList.push(newProject);
    },
    SET_PROJECT_STATUSES(state, projectStatuses) {
      state.projectStatuses = projectStatuses;
    },
  },
  actions: {
    /*  Projects */
    async fetchProjectList({ commit }) {
      try {
        const response = await axios.get(`${BASE_URL}/projects`);
        commit("SET_PROJECT_LIST", response.data);
        commit("SET_PROJECT_STATUSES", [
          "todo",
          "block",
          "inProgress",
          "inReview",
          "done",
        ]);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSelectedProject({ commit }, id) {
      try {
        const response = await axios.get(`${BASE_URL}/projects/${id}`);
        commit("SET_SELECTED_PROJECT", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addProject({ commit }, newProject) {
      const bodyData = {
        name: newProject.name,
        status: newProject.status,
      };
      try {
        const response = await axios.post(`${BASE_URL}/projects`, bodyData);
        commit("ADD_PROJECT", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateProject(_, { projectData, id }) {
      try {
        await axios.put(`${BASE_URL}/projects/${id}`, projectData);
      } catch (error) {
        console.error(error);
      }
    },
    async removeProject(_, id) {
      try {
        await axios.delete(`${BASE_URL}/projects/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
    /*  Todos */
    async fetchTodoList({ commit }) {
      try {
        const response = await axios.get(`${BASE_URL}/todos`);
        commit("SET_PROJECT_LIST", response.data);
        commit("SET_PROJECT_STATUSES", ["Pending", "Doing", "Done"]);
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getProjectList: (state) => state.projectList,
    getProjectStatuses: (state) => state.projectStatuses,
  },
};

export default projectStore;
