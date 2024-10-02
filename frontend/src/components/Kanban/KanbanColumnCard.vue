<template>
  <div>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <draggable v-model="localTaskList" group="task">
          <KanbanTaskCard
            v-for="(task, index) in localTaskList"
            :key="index"
            :task="task"
            class="mb-2"
            color="surface"
          />
        </draggable>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import KanbanTaskCard from "./KanbanTaskCard.vue";
export default {
  components: {
    draggable,
    KanbanTaskCard,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    taskList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localTaskList: this.taskList,
    };
  },
};
</script>

<style>
</style>