import draggable from 'vuedraggable';
<template>
  <div>
    <v-row justify="center">
      <v-col v-for="(project, index) in projectTaskList" :key="index">
        <KanbanColumnCard
          :title="Object.keys(project)[0]"
          :taskList="project[Object.keys(project)[0]]"
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
  data() {
    return {
      projectTaskList: [
        { todo: ["task1", "task2", "task3"] },
        { inProgress: ["task4", "task5", "task6"] },
        { inReview: [] },
        { done: ["task7", "task8", "task9"] },
      ],
    };
  },
  methods: {
    onDragEnd(e) {
      console.log("Drag ended", e);
    },
  },
};
</script>

<style>
</style>