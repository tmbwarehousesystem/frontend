<template>
  <v-container>
    <div>
      <Alert v-if="alert.error" :message="alert.message" :key="componentKey" />
    </div>
    <v-row>
      <div style="margin: 0 auto">
        <img class="scale" width="100" :src="require(`@/assets/user.svg`)" />
      </div>
    </v-row>
    <v-row>
      <v-flex xs11 sm7 md6 lg5 xl4 class="innerContainer">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="username"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 4 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-btn
            :disabled="!valid || !username || !password"
            class="mr-4 btn-primary"
            @click="login"
          >
            Validate
          </v-btn>

          <v-btn class="mr-4" @click="reset"> Reset </v-btn>
        </v-form>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store";
import Alert from "@/components/Alert";

export default {
  components: {
    Alert,
  },
  data() {
    return {
      componentKey: 0,
      alert: {
        error: false,
        message: "",
      },
      username: null,
      password: null,
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => (v && v.length >= 4) || "Min 4 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },

      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  computed: {
    auth_error: function () {
      return this.$store.getters["auth/auth_error"];
    },
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    forceRerender() {
      this.componentKey += 1;
    },
    login() {
      this.$refs.form.validate();
      this.$store
        .dispatch("auth/authenticate", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          store.user = res;
          const redirectPath = this.$route.query.redirect || "/";
          this.$router.push(redirectPath);
        })
        .catch((err) => {
          this.forceRerender();
          this.alert.error = err.error;
          this.alert.message = err.message;
        });
    },
  },
};
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>
