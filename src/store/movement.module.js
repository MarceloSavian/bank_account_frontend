import { movementService } from '../services/movement.service';
import router from '../router';

const movement = JSON.parse(localStorage.getItem('movement'));
const state = movement
    ? { movement }
    : { movement: null };

const actions = {
    postMovement({ dispatch, commit }, {value, movementType}) {
        commit('postMovementRequest');
        
        return movementService.postMovement(value, movementType)
            .then(
                movement => {
                    commit('postMovementSuccess', movement);
                    router.push('/');
                    return movement
                },
                error => {
                    commit('postMovementFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    getMovement({ dispatch, commit }) {
        commit('getMovementRequest');
        
        return movementService.getMovement()
            .then(
                movement => {
                    commit('getMovementSuccess', movement);
                    return movement
                },
                error => {
                    commit('getMovementFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    postMovementRequest(state) {
        state.movement = {};
    },
    postMovementSuccess(state, movement) {
        state.movement = movement;
    },
    postMovementFailure(state) {
        state.movement = null;
    },
};

export const movements = {
    namespaced: true,
    state,
    actions,
    mutations
};