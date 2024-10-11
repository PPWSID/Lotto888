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
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-form ref="taskForm" v-model="valid" @submit.prevent="submitForm">
          <v-card-title
            ><span class="text-h5">
              {{ isEdit ? "Edit Task" : "Add Task" }}
            </span></v-card-title
          >
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
              @click="dialog = false"
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
import { mapGetters } from "vuex";

export default {
  name: "KanbanBoardCard",
  components: {
    KanbanColumnCard,
  },
  props: {},
  data() {
    return {
      dialog: false,
      isEdit: false,
      taskData: {
        name: "",
        status: "",
      },
      valid: false,
      nameRules: [(v) => !!v || "Name is required"],
    };
  },
  methods: {
    handleCardMoved(card) {
      if (card.oldStatus !== card.newStatus) {
        this.$emit("cardMoved", { ...card });
      }
    },
    handleAddCard(status) {
      this.isEdit = false;
      this.taskData = { name: "", status };
      this.dialog = true;
    },
    submitForm() {
      this.dialog = false;
      if (this.$refs.taskForm.validate()) {
        if (this.isEdit) {
          this.$emit("editCard", { ...this.taskData });
        } else {
          this.$emit("addCard", { ...this.taskData });
        }
      }
      this.$refs.taskForm.reset();
    },
    handleEditCard(taskId) {
      this.isEdit = true;
      this.taskData = { ...this.getTaskById(taskId) };
      this.dialog = true;
    },
    handleDeleteCard(taskId) {
      this.$emit("deleteCard", taskId);
    },
  },
  computed: {
    ...mapGetters(["getTaskStatuses", "getTaskListByStatus", "getTaskById"]),
  },
};
</script>

<style>
</style>