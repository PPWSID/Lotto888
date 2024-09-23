<template>
  <div>
    <v-app-bar
      align-center
      color="white"
      height="90"
      flat
      app
      dense
      class="px-2 px-sm-16"
    >
      <v-row class="rows px-6">
        <!-- Left -->
        <v-col cols="6" class="pa-0 d-flex flex-col justify-start align-center">
          <v-btn depressed color="white" class="menu-btn">
            <p class="ma-0 ml-4">Lotto 888</p>
          </v-btn>
        </v-col>

        <!-- Right -->
        <v-col cols="6" class="pa-0 d-flex align-center justify-end">
          <!-- Search bar -->
          <v-autocomplete
            :items="items"
            placeholder="Search..."
            class="ma-0 d-none d-sm-flex"
            max-width="500"
            max-height="48"
            background-color="#F3F9FB"
            dense
            flat
            hide-no-data
            hide-details
            solo
          >
            <template v-slot:prepend-inner>
              <v-icon color="#008ECC">mdi-magnify</v-icon>
            </template>
            <template v-slot:append-inner>
              <v-icon color="#008ECC">mdi-microphone</v-icon>
            </template>
          </v-autocomplete>

          <v-icon color="#008ECC" class="d-sm-none">mdi-menu</v-icon>

          <v-btn depressed color="white" class="menu-btn d-none d-sm-flex">
            <v-icon color="#008ECC">mdi-account-outline</v-icon>
            <p class="ma-0 ml-2 d-none d-md-block">Sign Up/Sign In</p>
          </v-btn>
          <v-divider vertical class="mr-1 ml-1  d-none d-sm-flex"></v-divider>
          <v-btn depressed color="white" class="menu-btn d-none d-sm-flex">
            <v-icon color="#008ECC">mdi-cart-outline</v-icon>
            <p class="ma-0 ml-2 d-none d-md-block">Cart</p>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-divider class=""></v-divider>
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