<template>
  <div>
    <v-row justify="center">
      <v-col v-for="(taskStatus, index) in localStatusList" :key="index">
        <KanbanColumnCard
          :title="taskStatus"
          :taskList="filterTaskByStatus(taskStatus)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import KanbanColumnCard from "./KanbanColumnCard.vue";

export default {
  components: {
    KanbanColumnCard,
  },
  props: {
    taskList: {
      type: Array,
      default: () => [],
    },
    statusList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localTaskList: [...this.taskList],
      localStatusList: [...this.statusList],
    };
  },
  methods: {
    filterTaskByStatus(status) {
      return this.localTaskList.filter((task) => task.status === status);
    },
  },
  watch: {
    taskList: {
      immediate: true,
      // set local task by computed prop
      handler(newTaskList) {
        this.localTaskList = [...newTaskList];
      },
    },
    statusList: {
      immediate: true,
      // set local status by computed prop
      handler(newStatusList) {
        this.localStatusList = [...newStatusList];
      },
    },
  },
};
</script>

<style>
</style>