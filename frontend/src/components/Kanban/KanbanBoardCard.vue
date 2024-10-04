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
import { mapGetters } from "vuex";

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
    handleCardMoved(card) {
      // check if status changed
      if (card.oldStatus !== card.newStatus) {
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