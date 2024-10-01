<template>
  <div>
    <!-- Toolbar -->
    <v-app-bar
      flat
      app
      clipped-left
      color="surface"
      height="75"
      class="appbar-top-toolbar"
    >
      <v-row class="rows px-6">
        <!-- Left -->
        <v-col cols="6" class="pa-0 d-flex flex-col justify-start align-center">
          <p
            v-show="mini"
            class="text-h5 font-weight-medium ma-0 ml-8 d-none d-md-block"
          >
            {{ currentRouteName }}
          </p>
        </v-col>

        <!-- Right -->
        <v-col cols="6" class="pa-0 d-flex align-center justify-end">
          <!-- Search bar -->
          <v-autocomplete
            :items="main_menu"
            placeholder="Search..."
            class="ma-0 d-none d-sm-flex"
            max-width="500"
            max-height="48"
            background-color="surfaceLight"
            dense
            flat
            hide-no-data
            hide-details
            solo
          >
            <template v-slot:prepend-inner>
              <v-icon color="primary">mdi-magnify</v-icon>
            </template>
            <template v-slot:append-inner>
              <v-icon color="primary">mdi-microphone</v-icon>
            </template>
          </v-autocomplete>

          <v-icon color="primary" class="d-sm-none">mdi-menu</v-icon>

          <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-icon color="accent">{{
              $vuetify.theme.dark ? "mdi-weather-sunny" : "mdi-weather-night"
            }}</v-icon>
          </v-btn>

          <v-btn depressed icon color="white" class="menu-btn d-none d-sm-flex">
            <v-icon color="primary">mdi-bell-outline</v-icon>
          </v-btn>
          <v-btn depressed text color="white" class="menu-btn d-none d-sm-flex">
            <v-icon color="primary">mdi-account-outline</v-icon>
            <router-link :to="{ name: 'login_signup' }" class="login-link"
              ><p class="ma-0 ml-2 d-none d-md-block">
                Sign Up/Sign In
              </p></router-link
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-divider class=""></v-divider>
    <!-- Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
      permanent
      color="surface"
      width="280"
      class="navbar-left-drawer"
    >
      <!-- Header -->
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9mmXcW7PckG6WTkoanrsoCV6W_dTVAzYcg&s"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-title>LOTTO888</v-list-item-title>
        <v-btn icon @click="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon></v-btn
        >
      </v-list-item>

      <!-- Menu -->
      <v-list dense>
        <v-list-item
          v-for="item in main_menu"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item v-for="item in sub_menu" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Content -->
    <v-container fluid class="pa-0">
      <router-view />
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    main_menu: [
      { title: "Dashboard", icon: "mdi-view-dashboard", link: "/dashboard" },
      { title: "Chat", icon: "mdi-message", link: "/chat" },
      { title: "Calendar", icon: "mdi-calendar", link: "/calendar" },
    ],
    sub_menu: [
      { title: "Projects", icon: "mdi-archive", link: "/projects" },
      { title: "Tasks", icon: "mdi-format-list-bulleted", link: "/tasks" },
    ],
    mini: true,
  }),
  computed: {
    currentRouteName() {
      return this.$route.name.toUpperCase();
    },
  },
};
</script>

<style scoped>
.appbar-top-toolbar {
  z-index: 6 !important;
}

.navbar-left-drawer {
  height: 100vh;
  border-right: none !important;
}

.rows {
  width: 100%;
  margin: 0 !important;
}

.menu-btn {
  text-transform: none; /* Prevent uppercase transformation */
  font-weight: inherit; /* Retain the font weight */
}

.login-link {
  text-decoration: none;
}
</style>