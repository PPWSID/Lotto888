<template>
  <div>
    <v-card class="kanban-column-card">
      <v-card-title>{{ title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div class="pt-0 pb-2">
          <v-btn block @click="$emit('addCard', title)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
        <draggable
          v-model="localTaskList"
          group="task"
          @start="handleDragStart"
          @end="handleDragEnd"
          :id="title"
          class="py-0"
        >
          <KanbanTaskCard
            v-for="task in localTaskList"
            :key="task.id"
            :id="task.id"
            :task="task.name"
            @editTask="$emit('editCard', task.id)"
            @deleteTask="$emit('deleteCard', task.id)"
            color="surface"
            class="py-6"
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
  name: "KanbanColumnCard",
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
    handleDragStart(e) {
      console.log("Drag stated", e);
    },
    handleDragEnd(e) {
      console.log("Drag ended", e);
      const payload = {
        taskId: e.item.id,
        oldStatus: e.from.id,
        newStatus: e.to.id,
        oldIndex: e.oldIndex,
        newIndex: e.newIndex,
      };
      this.$emit("cardMoved", payload);
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

<style scoped>
@media screen and (max-width: 767px) {
  .kanban-column-card {
    min-width: 200px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .kanban-column-card {
    min-width: 300px;
  }
}
@media screen and (min-width: 1024px) {
  .kanban-column-card {
    min-width: 320px;
  }
}
</style>