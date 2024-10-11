<template>
  <div>
    <KanbanBoardCard
      @cardMoved="handleChangeTaskStatus"
      @addCard="handleAddNewTask"
      @deleteCard="handleDeleteTask"
      @editCard="handleEditTask"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import KanbanBoardCard from "../components/Kanban/KanbanBoardCard.vue";
import projectService from "@/services/projectService";

export default {
  name: "ProjectsView",
  components: {
    KanbanBoardCard,
  },
  data() {
    return {
      projectStatuses: ["todo", "block", "inProgress", "inReview", "done"],
      isLoading: false,
    };
  },
  methods: {
    ...mapActions([
      "setTaskList",
      "setTaskStatuses",
      "removeTask",
      "updateTask",
      "addNewTask",
    ]),
    async handleChangeTaskStatus(card) {
      try {
        await projectService.putProject(card.taskId, {
          status: card.newStatus,
        });
        this.updateTask({
          taskData: { status: card.newStatus },
          id: card.taskId,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async handleAddNewTask(taskData) {
      try {
        const response = await projectService.postProject(taskData);
        this.addNewTask(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async handleEditTask(taskData) {
      try {
        await projectService.putProject(taskData.id, { name: taskData.name });
        this.updateTask({ taskData: { name: taskData.name }, id: taskData.id });
      } catch (error) {
        console.error(error);
      }
    },
    async handleDeleteTask(id) {
      try {
        await projectService.deleteProject(id);
        this.removeTask(id);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProjects() {
      try {
        this.isLoading = true;
        const response = await projectService.getProjects();
        return response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  computed: {},
  mounted() {
    this.fetchProjects().then((response) => {
      this.setTaskList(response);
      this.setTaskStatuses(this.projectStatuses);
    });
  },
};
</script>

<style>
</style>