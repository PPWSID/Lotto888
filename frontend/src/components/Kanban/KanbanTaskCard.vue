<template>
  <div>
    <v-card color="surface">
      <v-row justify="space-between" class="pa-0">
        <v-col align-self="center" cols="9" class="py-0 pr-2"
          ><v-card-title>{{ task }}</v-card-title></v-col
        >
        <v-col align-self="center" cols="3" class="py-0">
          <div class="d-flex justify-end mr-4">
            <v-btn icon @click="$emit('editTask')">
              <v-icon color="blue lighten-2"
                >mdi-square-edit-outline</v-icon
              ></v-btn
            >
            <v-btn icon @click="$emit('deleteTask')">
              <v-icon color="red lighten-2"
                >mdi-trash-can-outline</v-icon
              ></v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "KanbanTaskCard",
  props: {
    task: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>