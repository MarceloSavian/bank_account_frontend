import Vue from "vue";
import Vuex from "vuex";

import { userModule } from "./user.module";
import { alert } from "./alert.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alert,
    userModule,
  },
});
