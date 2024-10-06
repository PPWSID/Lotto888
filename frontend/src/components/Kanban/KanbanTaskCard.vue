<template>
  <div>
    <v-card class="mb-2" color="surface">
      <v-card-title>{{ task }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
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