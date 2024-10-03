<template>
  <div>
    <KanbanBoardCard :taskList="getTaskList" :statusList="getTaskStatuses" />
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
    ...mapActions(["fetchTaskList"]),
  },
  computed: {
    ...mapGetters(["getTaskListByStatus", "getTaskStatuses", "getTaskList"]),
  },
  mounted() {
    this.fetchTaskList().then(() => {
      console.log("Task list fetched");
    });
  },
};
</script>

<style>
</style>