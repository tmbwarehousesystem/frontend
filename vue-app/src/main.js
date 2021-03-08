import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import WelcomeScreen from './pages/WelcomeScreen.vue';
import UsersList from './pages/UsersList.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

new Vue({
  router: new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: WelcomeScreen },
      { path: '/users', component: UsersList },
    ],
  }),

  vuetify,
  render: (h) => h(App)
}).$mount('#app');
