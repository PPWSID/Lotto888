<template>
  <div class="bg-register">
    <v-row class="rows">
      <v-col cols="12" md="6" class="left-col d-flex justify-center">
        <div
          class="d-flex justify-center align-center flex-column mx-2 px-2 mx-sm-8 px-sm-8 mx-md-16 px-md-16"
        >
          <p class="text-h3">Lotto888</p>
          <p class="text-subtitle-1 mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad,
            in architecto deserunt laborum mollitia?
          </p>
          <v-img
            class="mt-16"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1miAHO9z3lWudtIO3XE-36VDdxzZoo4pw8F_WPZ_-gWIcx3rZbEIWzu9fOQOJF7DpKI36TNDBhsviHLfWqIkeFd7m74qbKIEEr34I8jGuE0BWfo1Pl9ReXGSZgsR784Ey3l8iVLNqP_igZFhicv98MrB9Bgzp1NxAWUAW74LL3-h5H8i_vJWMKvAWeiyc/s876/medical_bed_kaigo_reclining.png"
            max-height="150"
            max-width="250"
            contain
          ></v-img>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="right-col d-flex justify-center">
        <router-view />
      </v-col>
      <scroll-page-btn />
    </v-row>
  </div>
</template>

<script>
import ScrollPageBtn from "../components/ScrollPageBtn.vue";
export default {
  components: {
    ScrollPageBtn,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.bg-register {
  width: 100%;
  height: 100%;
}

.rows {
  width: 100%;
  height: 100%;
  margin: 0 !important;
}

.left-col {
  width: 100%;
  height: 100vh;
  background-color: #008ecc;
  color: white;
}

.right-col {
  width: 100%;
  height: 100vh;
}
</style>