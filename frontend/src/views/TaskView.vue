<template>
  <div>
    <KanbanBoardCard :onCardMoved="handleChangeTaskStatus" />
  </div>
</template>
  
  <script>
import { mapActions, mapGetters } from "vuex";
import KanbanBoardCard from "../components/Kanban/KanbanBoardCard.vue";
export default {
  name: "TaskView",
  components: {
    KanbanBoardCard,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "fetchTodoList",
      "updateTaskList",
      "updateProject",
      "updateTaskStatuses",
    ]),
    handleChangeTaskStatus(card) {
      this.updateProject({
        projectData: { status: card.newStatus },
        id: card.taskId,
      });
    },
  },
  computed: {
    ...mapGetters(["getProjectList", "getProjectStatuses"]),
  },
  mounted() {
    // fetch project data
    this.fetchTodoList().then(() => {
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