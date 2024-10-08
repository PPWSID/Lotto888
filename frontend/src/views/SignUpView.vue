<template>
  <v-card
    class="d-flex justify-center align-center flex-column my-auto mx-2 px-2 mx-sm-8 px-sm-8 mx-md-16 px-md-16"
    elevation="0"
  >
    <v-card-title class="ma-0 pa-0 align-self-start"
      >Create your account</v-card-title
    >
    <v-card-text class="ma-0 pa-0 mb-7">It's free and easy</v-card-text>
    <v-form ref="signupForm" v-model="valid" @submit.prevent="submitForm">
      <v-row>
        <!-- username -->
        <v-col cols="12" class="py-0">
          <label for="username" class="text-body-2">Username</label>
          <v-text-field
            v-model="form.username"
            :rules="usernameRules"
            label="Enter your username"
            background-color="#F3F9FB"
            dense
            solo
            flat
            required
          ></v-text-field>
        </v-col>
        <!-- email -->
        <v-col col="12" class="py-0">
          <label for="email" class="text-body-2">E-mail</label>
          <v-text-field
            v-model="form.gmail"
            :rules="emailRules"
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
            <v-col cols="12" sm="6" class="">
              <label for="password" class="text-body-2">Password</label>
              <v-text-field
                v-model="form.password"
                :rules="passwordRules"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                label="Type your password"
                hint="At least 8 characters"
                background-color="#F3F9FB"
                @click:append="showPassword = !showPassword"
                dense
                solo
                flat
                required
              ></v-text-field
            ></v-col>
            <v-col cols="12" sm="6" class="">
              <label for="password" class="text-body-2">Confirm password</label>
              <v-text-field
                v-model="form.confirmPassword"
                :rules="confirmPasswordRules"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                label="Type your password"
                hint="At least 8 characters"
                background-color="#F3F9FB"
                @click:append="showPassword = !showPassword"
                dense
                solo
                flat
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <!-- check terms -->
        <v-col cols="12" class="py-0 d-flex">
          <v-checkbox
            v-model="agreeTerm"
            :rules="agreeTermRules"
            class="px-3 py-0 ma-0"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          >
            <template v-slot:label>
              <p class="pt-3 my-0 text-caption">
                By creating an account means you agree to the Terms and
                Conditions, and our Privacy Policy
              </p>
            </template>
          </v-checkbox>
        </v-col>
        <!-- submit btn -->
        <v-col cols="12" class="py-0">
          <v-btn
            :loading="loading"
            :disabled="!valid || !agreeTerm"
            type="submit"
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
      >Already have an account?
      <router-link :to="{ name: 'login_signin' }" class="signin-link ml-1"
        ><p class="font-weight-bold">Sign In</p></router-link
      ></v-card-text
    >
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        confirmPassword: "",
        gmail: "",
        // tel: "",
        // birth: new Date().toISOString().slice(0, 10),
        // age: 0,
        // sex: "",
      },
      agreeTerm: false,
      showPassword: false,
      usernameRules: [(v) => !!v || "Username is required"],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 8 || "Password must be at least 8 characters",
      ],
      confirmPasswordRules: [
        (v) => !!v || "Confirm password is required",
        (v) => v === this.form.password || "Password does not match",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      agreeTermRules: [(v) => !!v || "You must agree to continue"],
      valid: false,
      loading: false,
    };
  },
  methods: {
    async submitForm() {
      if (this.$refs.signupForm.validate()) {
        this.loading = true;
        try {
          const response = await axios.post(
            `${process.env.VUE_APP_DB_PORT}/register`,
            this.form
          );
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", this.form.username);
          this.$router.push("/");
        } catch (error) {
          if (!error.response) {
            // No response from server
            this.$swal({
              title: "Connection Error",
              text: "Cannot connect to the server.",
              icon: "error",
              confirmButtonText: "OK",
              confirmButtonColor: "#3085d6",
            });
          } else {
            this.$swal({
              title: "Sign Up Failed",
              text: error.response.data.error || "Unknown error.",
              icon: "error",
              confirmButtonText: "OK",
              confirmButtonColor: "#3085d6",
            });
          }
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.rows {
  width: 100%;
  height: 100%;
  margin: 0 !important;
}

.signin-link {
  text-decoration: none;
  color: #008ecc;
}
</style>