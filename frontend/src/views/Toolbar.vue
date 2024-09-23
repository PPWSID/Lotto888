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
      <v-row class="rows px-6">
        <!-- Left -->
        <v-col class="pa-0 d-flex flex-col justify-start align-center">
          <v-btn depressed color="white" class="menu-btn">
            <v-icon color="#008ECC">mdi-menu</v-icon>
          </v-btn>
          <p class="ma-0 ml-4">Lotto 888</p>
        </v-col>

        <!-- Right -->
        <v-col class="pa-0 d-flex align-center justify-end">
          <!-- Search bar -->
          <v-icon class="mr-7">mdi-magnify</v-icon>
          <v-btn depressed color="white" class="menu-btn">
            <v-icon color="#008ECC">mdi-account-outline</v-icon>
            <p class="ma-0 ml-2">Sign Up/Sign In</p>
          </v-btn>
          <v-divider vertical class="mr-1 ml-1"></v-divider>
          <v-btn depressed color="white" class="menu-btn">
            <v-icon color="#008ECC">mdi-cart-outline</v-icon>
            <p class="ma-0 ml-2">Cart</p>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-divider class="mr-1 ml-1"></v-divider>
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

.menu-btn {
  text-transform: none; /* Prevent uppercase transformation */
  font-weight: inherit; /* Retain the font weight */
}
</style>