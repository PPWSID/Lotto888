<template>
  <div>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <draggable v-model="localTaskList" group="task" @end="onDragEnd">
          <KanbanTaskCard
            v-for="(task, index) in localTaskList"
            :key="index"
            :task="task.name"
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
      // for defend mutating-props
      localTaskList: [...this.taskList],
    };
  },
  methods: {
    onDragEnd(e) {
      console.log("Drag ended", e);
    },
  },
  watch: {
    taskList: {
      // set local task by computed prop
      immediate: true,
      handler(newTaskList) {
        this.localTaskList = [...newTaskList];
      },
    },
  },
};
</script>

<style>
</style>