<template>
  <div>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <draggable v-model="localTaskList" group="task">
          <v-card
            v-for="(task, index) in localTaskList"
            :key="index"
            class="mb-2"
          >
            <v-card-title>{{ task }}</v-card-title>
          </v-card>
        </draggable>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
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