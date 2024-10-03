<template>
  <div>
    <v-row justify="center">
      <v-col v-for="(status, index) in getTaskStatuses" :key="index">
        <KanbanColumnCard
          :title="status"
          :taskList="getTaskListByStatus(status)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import KanbanColumnCard from "./KanbanColumnCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    KanbanColumnCard,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["getTaskStatuses", "getTaskListByStatus"]),
  },
  watch: {},
};
</script>

<style>
</style>