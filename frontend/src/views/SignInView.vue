<template>
  <v-card
    class="d-flex justify-center align-center flex-column my-auto mx-2 px-2 mx-sm-8 px-sm-8 mx-md-16 px-md-16"
    elevation="0"
  >
    <v-card-title class="ma-0 pa-0 align-self-start"
      >Welcome Back!</v-card-title
    >
    <v-card-text class="ma-0 pa-0 mb-7">Meet the good luck today</v-card-text>
    <v-form>
      <v-row>
        <!-- email -->
        <v-col col="12" class="py-0">
          <label for="email" class="text-body-2">E-mail</label>
          <v-text-field
            v-model="form.email"
            label="Type your e-mail"
            background-color="#F3F9FB"
            dense
            solo
            flat
            required
          ></v-text-field>
        </v-col>
        <!-- password -->
        <v-col cols="12" class="py-0">
          <v-row>
            <v-col cols="12" class="">
              <label for="password" class="text-body-2">Password</label>
              <v-text-field
                v-model="form.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                class="mb-1"
                label="Type your password"
                hint="At least 8 characters"
                background-color="#F3F9FB"
                @click:append="showPassword = !showPassword"
                hide-details="auto"
                dense
                solo
                flat
                required
              >
              </v-text-field>
              <p
                class="text-caption text-right font-weight-light pa-0 ma-0 mb-8 margin-bottom-text-field-login"
              >
                Forgot password
              </p>
            </v-col>
          </v-row>
        </v-col>

        <!-- submit btn -->
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
            Sign In
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" class="mt-10 mb-2"
        ><v-divider></v-divider>
        <p class="text-caption my-0 mx-4 font-weight-light">
          or do it via other accounts
        </p>
        <v-divider></v-divider
      ></v-row>
      <v-row>
        <v-col class="d-flex justify-center"
          ><v-btn
            fab
            elevation="2"
            color="white"
            max-width="52"
            max-height="52"
          >
            <v-icon>mdi-google</v-icon>
          </v-btn></v-col
        >
      </v-row>
    </v-form>
    <v-card-text class="ma-0 pa-0 mt-6 mt-sm-10 d-flex justify-center"
      >Don't have an account?
      <router-link :to="{ name: 'login_signup' }" class="signup-link ml-1"
        ><p class="font-weight-bold">Sign Up</p></router-link
      ></v-card-text
    >
  </v-card>
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
.rows {
  width: 100%;
  height: 100%;
  margin: 0 !important;
}

.signup-link {
  text-decoration: none;
  color: #008ecc;
}
</style>