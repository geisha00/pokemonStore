const initialState = {
    isLogged: false,
};
const getters = {};
const actions = {
    async login({ commit }, password) {

        if (password == "1234") {
            commit('login');
            return true;
        } else {
            return false;
        }
    },
    logOut({ commit }) {
      commit('logOut');
            
        
    },

};
const mutations = {
    login(state) {
        state.isLogged = true;
    },
  
    logOut(state) {
        state.isLogged = false;
        }
    }



    export default {
        namespaced: true,
        state: initialState,
        getters,
        actions,
        mutations,
    };