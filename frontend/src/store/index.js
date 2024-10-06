import Vue from "vue";
import Vuex from "vuex";
import projectStore from "./modules/project";
import taskStore from "./modules/task";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    projectStore,
    taskStore,
  },
});
