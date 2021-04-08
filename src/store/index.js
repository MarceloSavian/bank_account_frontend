import Vue from 'vue';
import Vuex from 'vuex';

import { users } from './user.module';
import { alert } from './alert.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        users,
        alert
    }
});