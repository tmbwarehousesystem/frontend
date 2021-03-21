<template>
  <v-container >
    <!-- <v-row v-resize="onResize" align="center" justify="center"> -->
    <v-row>
      <v-flex xs11 sm11 md11 lg10 xl10 class="innerContainer mt-10">
        <div class="home">
          <h1>DASHBOARD</h1>

          <!-- DESKTOP -->
          <v-container class="mt-2 lighten-5 hidden-xs-only">
            <v-row v-for="destination in desktopMenu" :key="destination.name" no-gutters>
              <v-col cols="12" sm="2">
                <figure style="display: inline-block; vertical-align: middle">
                  <router-link
                    :to="{
                      name: 'MenuOptions',
                      params: { slug: destination.slug },
                    }"
                  >
                    <img
                      class="scale"
                      :src="require(`@/assets/${destination.image}`)"
                      :alt="destination.name"
                    />
                  </router-link>
                </figure>
              </v-col>
              <v-col>
                <v-card class="pa-2" color="#1597f6" outlined>
                  <router-link
                    :to="{
                      name: 'MenuOptions',
                      params: { slug: destination.slug },
                    }"
                  >
                    <h2>{{ destination.name }}</h2>
                  </router-link>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <!-- MOBILE -->
          <v-container class="mt-2 lighten-5 hidden-sm-and-up">
            <v-row v-for="menu in pdaMenu" :key="menu.name" no-gutters class="list-spacing">
              <v-flex xs12>
                <figure style="display: inline-block; vertical-align: middle">
                  <router-link
                    :to="{
                      name: 'PdaMenuOptions',
                      params: { slug: menu.slug },
                    }"
                  >
                    <img class="scale" :src="require(`@/assets/${menu.image}`)" :alt="menu.name" />
                  </router-link>
                </figure>
              </v-flex>
              <v-flex xs12>
                <v-card class="pa-2" color="#1597f6" outlined>
                  <router-link
                    :to="{
                      name: 'PdaMenuOptions',
                      params: { slug: menu.slug },
                    }"
                  >
                    <h2>{{ menu.name }}</h2>
                  </router-link>
                </v-card>
              </v-flex>
            </v-row>
          </v-container>
        </div>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      desktopMenu: store.options,
      pdaMenu: store.pdaOptions,
      windowSize: {
        x: 0,
        y: 0
      }
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    }
  }
};
</script>
<style scoped>
img {
  max-width: 200px;
}
a {
  color: white !important;
  text-decoration: none;
}
/* a:hover,
a:visited {
  text-decoration: underline;
} */
.scale {
  width: 50px;
}
.list-spacing:nth-child(n+2) {
    margin-top: 2rem;
}
</style>
