import { movementTypesService } from '../services/movementTypes.service';
import router from '../router';

const movementTypes = JSON.parse(localStorage.getItem('movementTypes'));
const state = movementTypes
    ? { movementTypes }
    : { movementTypes: null };

const actions = {
    getMovementTypes({ dispatch, commit }) {
        commit('getMovementTypesRequest');
        
        return movementTypesService.getMovementTypes()
            .then(
                movementTypes => {
                    commit('getMovementTypesSuccess', movementTypes);
                    return movementTypes
                },
                error => {
                    commit('getMovementTypesFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    getMovementTypesRequest(state) {
        state.movementTypes = {};
    },
    getMovementTypesSuccess(state, movementTypes) {
        state.movementTypes = movementTypes;
    },
    getMovementTypesFailure(state) {
        state.movementTypes = null;
    },
};

export const movementTypeModule = {
    namespaced: true,
    state,
    actions,
    mutations
};