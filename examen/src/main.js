import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';

import store from "./stores/store";
import axios from 'axios';

import App from './App.vue'

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile'

Vue.config.productionTip = false

Vue.use(VueRouter);

axios.defaults.baseURL = 'https://1mfqxergc3.execute-api.us-east-1.amazonaws.com/'

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
  },
  {
    path: '/registro',
    component: Register,
    name: 'registro'
  },
  {
    path: '/',
    component: Profile,
    name: 'perfil'
  }
];


const router = new VueRouter({
  mode:'history',
  routes,
  base: '/'
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
