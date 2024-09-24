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
        <v-card
          class="d-flex justify-center align-center flex-column mx-2 px-2 mx-sm-8 px-sm-8 mx-md-16 px-md-16"
          elevation="0"
        >
          <v-card-title class="ma-0 pa-0 align-self-start"
            >Create your account</v-card-title
          >
          <v-card-text class="ma-0 pa-0 mb-4">It's free and easy</v-card-text>
          <v-form>
            <v-row>
              <!-- username -->
              <v-col cols="12" class="py-0">
                <label for="username" class="text-body-2">Username</label>
                <v-text-field
                  v-model="form.username"
                  label="Enter your name"
                  background-color="#F3F9FB"
                  solo
                  flat
                  required
                ></v-text-field>
              </v-col>
              <!-- email -->
              <v-col col="12" class="py-0">
                <label for="email" class="text-body-2">E-mail</label>
                <v-text-field
                  v-model="form.email"
                  label="Type your e-mail"
                  background-color="#F3F9FB"
                  solo
                  flat
                  required
                ></v-text-field>
              </v-col>
              <!-- password -->
              <v-col cols="12" class="py-0">
                <v-row>
                  <v-col cols="12" sm="6">
                    <label for="password" class="text-body-2">Password</label>
                    <v-text-field
                      v-model="form.password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      label="Type your password"
                      hint="At least 8 characters"
                      background-color="#F3F9FB"
                      @click:append="showPassword = !showPassword"
                      solo
                      flat
                      required
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <label for="password" class="text-body-2"
                      >Confirm password</label
                    >
                    <v-text-field
                      v-model="form.confirmPassword"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      label="Type your password"
                      hint="At least 8 characters"
                      background-color="#F3F9FB"
                      @click:append="showPassword = !showPassword"
                      solo
                      flat
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <!-- check terms -->
              <v-co cols="12" class="py-0">
                <v-checkbox
                  v-model="checkbox"
                  :error-messages="checkboxErrors"
                  label="By creating an account means you agree to the Terms and Conditions, and our Privacy Policy"
                  class="pa-3 ma-0"
                  required
                  @change="$v.checkbox.$touch()"
                  @blur="$v.checkbox.$touch()"
                ></v-checkbox>
              </v-co>
              <v-col cols="12" class="py-0">
                <v-btn
                  @click="submit"
                  width="100%"
                  max-height="48"
                  rounded
                  depressed
                  color="#008ecc"
                  class="white--text"
                >
                  Sign Up
                </v-btn>
              </v-col>
            </v-row>
            <v-divider class="my-8"></v-divider>
            <v-row>
              <v-col class="d-flex justify-center"
                ><v-icon>mdi-google</v-icon></v-col
              >
            </v-row>
          </v-form>
          <v-card-text class="ma-0 pa-0 align-self-center"
            >Aldready have an account? Sign In</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        tel: "",
        birth: new Date().toISOString().slice(0, 10),
        age: 0,
        sex: "",
      },
      agreeTerm: false,
      showPassword: false,
    };
  },
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
  height: 100%;
  background-color: #008ecc;
  color: white;
}

.right-col {
  width: 100%;
  height: 100%;
}
</style>