<template>
  <div>
    <v-row justify="center">
      <v-col v-for="(taskStatus, index) in getTaskStatuses" :key="index">
        <KanbanColumnCard
          :title="taskStatus"
          :taskList="getTaskListByStatus(taskStatus)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import KanbanColumnCard from "./KanbanColumnCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    KanbanColumnCard,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchTaskList"]),
  },
  computed: {
    ...mapGetters(["getTaskListByStatus", "getTaskStatuses"]),
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