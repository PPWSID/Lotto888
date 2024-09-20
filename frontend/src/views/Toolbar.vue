<template>
  <div>
    <v-app-bar
      align-center
      color="white"
      max-height="90px"
      flat
      app
      class="px-16"
    >
      <!-- Left -->
      <v-row class="ma-0 rows pl-10">
        <v-col class="pa-0 d-flex flex-col justify-start align-center">
          <v-icon>mdi-menu</v-icon>
          <p class="ma-0 ml-4">Lotto 888</p>
        </v-col>
      </v-row>

      <!-- Middle -->
      <v-row class="ma-0 rows pa-0">
        <v-col class="pa-0">
          <v-icon>mdi-magnify</v-icon>
        </v-col>
      </v-row>

      <!-- Right -->
      <v-row class="ma-0 rows pr-10">
        <v-col cols="10" class="pa-0 d-flex align-center justify-end pr-3">
          <v-icon>mdi-account-outline</v-icon>
          <p class="ma-0 ml-2">Sign Up/Sign In</p>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="2" class="pa-0 d-flex align-center justify-end">
          <v-icon>mdi-cart-outline</v-icon>
          <p class="ma-0 ml-2">Cart</p>
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- Content -->
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rows {
  width: 100%;
  margin: 0 !important;
}
</style>