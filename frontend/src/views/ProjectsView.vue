<template>
  <div>
    <KanbanBoardCard :onCardMoved="handleChangeTaskStatus" />
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
    ...mapActions(["fetchProjectList", "updateTaskList", "updateProject"]),
    handleChangeTaskStatus(card) {
      this.updateProject({
        projectData: { status: card.newStatus },
        id: card.taskId,
      });
    },
  },
  computed: {
    ...mapGetters(["getProjectList"]),
  },
  mounted() {
    // fetch project data
    this.fetchProjectList().then(() => {
      // set project data to task list
      this.updateTaskList(this.getProjectList);
      console.log("Project list fetched");
    });
  },
};
</script>

<style>
</style>