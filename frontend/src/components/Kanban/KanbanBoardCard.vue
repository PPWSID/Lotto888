<template>
  <div>
    <v-row class="overflow-x-auto flex-md-nowrap">
      <v-col
        v-for="(status, index) in getTaskStatuses"
        :key="index"
        cols="12"
        md="auto"
      >
        <KanbanColumnCard
          :title="status"
          :taskList="getTaskListByStatus(status)"
          @cardMoved="handleCardMoved"
          @addCard="handleAddCard"
          @editCard="handleEditCard"
          @deleteCard="handleDeleteCard"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import KanbanColumnCard from "./KanbanColumnCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "KanbanBoardCard",
  components: {
    KanbanColumnCard,
  },
  props: {
    onCardMoved: {
      type: Function,
      default: (card) => {
        console.log(card);
      },
    },
    onAddCard: {
      type: Function,
      default: (status) => {
        console.log(status);
      },
    },
    onEditCard: {
      type: Function,
      default: (taskId) => {
        console.log(taskId);
      },
    },
    onDeleteCard: {
      type: Function,
      default: (taskId) => {
        console.log(taskId);
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["updateTask", "addNewTask", "removeTask"]),
    handleCardMoved(card) {
      // check if status changed
      if (card.oldStatus !== card.newStatus) {
        this.updateTask({
          taskData: { status: card.newStatus },
          id: card.taskId,
        });
        this.onCardMoved(card);
      }
    },
    handleAddCard(status) {
      this.addNewTask({ id: Date.now(), name: "testAdd", status: status });
      this.onAddCard(status);
    },
    handleEditCard(taskId) {
      this.updateTask({ taskData: { name: "testEdit" }, id: taskId });
      this.onEditCard(taskId);
    },
    handleDeleteCard(taskId) {
      this.removeTask(taskId);
      this.onDeleteCard(taskId);
    },
  },
  computed: {
    ...mapGetters(["getTaskStatuses", "getTaskListByStatus"]),
  },
  watch: {},
};
</script>

<style>
</style>