import Vue from 'vue';
import Vuex from 'vuex';
import pokemon from'./modules/pokemon';
import auth from'./modules/auth';


Vue.use(Vuex);

export default new Vuex.Store({
modules:{
pokemon,
auth,

},
});
                                                     