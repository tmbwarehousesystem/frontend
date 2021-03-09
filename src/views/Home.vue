<template>
  <v-container>
    <v-row>
      <v-flex xs11 sm11 md11 lg10 xl10 class="innerContainer mt-10">
        <div class="home">
          <h1>DASHBOARD</h1>

          <v-container class="grey lighten-5">
            <v-row
              v-for="destination in destinations"
              :key="destination.name"
              no-gutters
            >
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
          
        </div>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
<style scoped>
/* .home {
  max-width: 80%;
} */
img {
  max-width: 200px;
}
/* .destinations {
  display: flex;
  justify-content: space-between;
} */
a {
  color: white!important;
  text-decoration: none;
}
/* a:hover,
a:visited {
  text-decoration: underline;
} */
.scale{
  width: 50px;
  /* transform:scale(1.5) */
}
</style>
