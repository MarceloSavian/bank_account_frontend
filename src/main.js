import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
import { store } from './store';
import router from "./router/index";
import * as VeeValidate from 'vee-validate';

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'
import { currency } from "./helpers/currency";
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(VeeValidate)
Vue.filter('toCurrency', currency);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
