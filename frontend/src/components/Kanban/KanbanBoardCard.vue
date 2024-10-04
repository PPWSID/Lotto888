<template>
  <div>
    <v-row justify="center">
      <v-col v-for="(status, index) in getTaskStatuses" :key="index">
        <KanbanColumnCard
          :title="status"
          :taskList="getTaskListByStatus(status)"
          @cardMoved="handleCardMoved"
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
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["updateTask"]),
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
  },
  computed: {
    ...mapGetters(["getTaskStatuses", "getTaskListByStatus"]),
  },
  watch: {},
};
</script>

<style>
</style>