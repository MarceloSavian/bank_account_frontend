import { accountService } from '../services/account.service';
import router from '../router';

const account = JSON.parse(localStorage.getItem('account'));
const state = account
    ? { account }
    : { account: null };

const actions = {
    getAccount({ dispatch, commit }) {
        console.log('dsaidohsaudhasui')
        commit('getAccountRequest');
        
        return accountService.getAccount()
            .then(
                account => {
                    commit('getAccountSuccess', account);
                    router.push('/');
                    return account
                },
                error => {
                    commit('getAccountFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    getAccountRequest(state) {
        state.account = {};
    },
    getAccountSuccess(state, account) {
        state.account = account;
    },
    getAccountFailure(state) {
        state.account = null;
    },
};

export const accounts = {
    namespaced: true,
    state,
    actions,
    mutations
};