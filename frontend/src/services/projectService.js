import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://66eb9e522b6cf2b89c5b1529.mockapi.io",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProjects() {
    return apiClient.get("/projects");
  },
  getProject(id) {
    return apiClient.get(`/projects/${id}`);
  },
  postProject(project) {
    return apiClient.post("/projects", project);
  },
  putProject(id, project) {
    return apiClient.put(`/projects/${id}`, project);
  },
  deleteProject(id) {
    return apiClient.delete(`/projects/${id}`);
  },
  getTodos() {
    return apiClient.get("/todos");
  },
};
