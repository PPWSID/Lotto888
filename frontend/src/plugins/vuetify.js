import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {customProperties: true},
    themes: {
      light: {
        primary: "#4caf50",
        secondary: "#8bc34a",
        accent: "#3f51b5",
        error: "#f44336",
        warning: "#ff5722",
        info: "#607d8b",
        success: "#009688",
        surface: "#f9f9f9",
        surfaceLight: "#ffffff",
      },
      dark: {
        primary: "#6bc66d",
        secondary: "#a2dba0",
        accent: "#554cbc",
        error: "#e91e63",
        warning: "#ff9800",
        info: "#455a64",
        success: "#00695c",
        surface: "#282828",
        surfaceLight: "#575757",
      },
    },
  },
});
