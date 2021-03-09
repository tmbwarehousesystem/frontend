<template>
  <v-app-bar app id="nav" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        max-height="150"
        max-width="250"
        :src="require(`@/assets/mb.jpg`)"
        transition="scale-transition"
        width="150"
      />
    </div>

    <v-spacer></v-spacer>

    <ul v-if="isLoggedIn" class="nav-links">
      <li v-if="isLoggedIn" class="links hidden-xs-only">
        <h1>Welcome {{ getUser }}</h1>
      </li>
      <li v-if="isLoggedIn" class="links headerColor" @click="logout">
        <router-link to="/login" class="headerColor"> Log out </router-link>
      </li>
    </ul>
  </v-app-bar>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      user: null,
      destinations: store.destinations,
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters["auth/isLoggedIn"];
    },
    getUser: function () {
      return this.$store.getters["auth/getUser"];
    },
  },
  methods: {
    // logout() {
    //   this.$store.dispatch("auth/logout", null, { root: true });
    //   this.$router.push("/login");
    // },
    logout: function () {
      this.$store.dispatch("auth/logout").then(() => {
        store.user = null;
      });
    },
  },
};
</script>

<style scoped>
/* #nav {
  display: block;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
} */

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  border: 1px solid transparent;
  padding: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.vue-school-active-class {
  color: #afddff;
  border-color: #afddff;
}

.headerColor {
  color: white;
}
</style>
