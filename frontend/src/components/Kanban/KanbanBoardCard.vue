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
    <v-dialog v-model="addDialog" persistent max-width="600px">
      <v-card>
        <v-form ref="taskForm" v-model="valid" @submit.prevent="submitAddCard">
          <v-card-title><span class="text-h5">Add new task</span></v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="taskData.name"
                    :rules="nameRules"
                    type="text"
                    label="Task title"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              type="reset"
              text
              @click="addDialog = false"
            >
              Close
            </v-btn>
            <v-btn color="blue darken-1" type="submit" text :disabled="!valid">
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
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
    return {
      addDialog: false,
      taskData: {
        name: "",
        status: "",
      },
      valid: false,
      nameRules: [(v) => !!v || "Name is required"],
    };
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
      this.taskData.status = status;
      this.addDialog = true;
    },
    submitAddCard() {
      this.addDialog = false;
      if (this.$refs.taskForm.validate()) {
        this.addNewTask({ ...this.taskData, id: Date.now() });
        this.onAddCard(this.taskData);
      }
      this.$refs.taskForm.reset();
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
    ...mapGetters(["getTaskStatuses", "getTaskListByStatus", "getProjectList"]),
  },
};
</script>

<style>
</style>