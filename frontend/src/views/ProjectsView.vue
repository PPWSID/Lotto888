<template>
  <div>
    <KanbanBoardCard />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import KanbanBoardCard from "../components/Kanban/KanbanBoardCard.vue";
export default {
  components: {
    KanbanBoardCard,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchProjectList", "updateTaskList"]),
  },
  computed: {
    ...mapGetters(["getProjectList"]),
  },
  mounted() {
    this.fetchProjectList().then(() => {
      // get project data to task list
      this.updateTaskList(this.getProjectList);
      console.log("Project list fetched");
    });
  },
};
</script>

<style>
</style>