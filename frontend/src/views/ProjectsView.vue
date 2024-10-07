<template>
  <div>
    <KanbanBoardCard
      :onCardMoved="handleChangeTaskStatus"
      :onAddCard="handleAddNewTask"
      :onDeleteCard="handleDeleteTask"
      :onEditCard="handleEditTask"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import KanbanBoardCard from "../components/Kanban/KanbanBoardCard.vue";
export default {
  name: "ProjectsView",
  components: {
    KanbanBoardCard,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "fetchProjectList",
      "updateTaskList",
      "updateProject",
      "updateTaskStatuses",
      "addProject",
      "removeProject",
    ]),
    handleChangeTaskStatus(card) {
      this.updateProject({
        projectData: { status: card.newStatus },
        id: card.taskId,
      });
    },
    handleAddNewTask(status) {
      this.addProject({
        name: "testAdd",
        status: status,
      });
    },
    handleEditTask(id) {
      this.updateProject({
        projectData: { name: "testEdit" },
        id: id,
      });
    },
    handleDeleteTask(id) {
      this.removeProject(id);
    },
  },
  computed: {
    ...mapGetters(["getProjectList", "getProjectStatuses"]),
  },
  mounted() {
    // fetch project data
    this.fetchProjectList().then(() => {
      // set project data to task list
      this.updateTaskList(this.getProjectList);
      this.updateTaskStatuses(this.getProjectStatuses);
      console.log("Project list fetched");
    });
  },
};
</script>

<style>
</style>