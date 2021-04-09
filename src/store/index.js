import Vue from 'vue';
import Vuex from 'vuex';

import { users } from './user.module';
import { alert } from './alert.module';
import { accounts } from './account.module';
import { movementTypeModule } from './movementTypes.module';
import { movements } from './movement.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        users,
        alert,
        accounts,
        movementTypeModule,
        movements
    }
});