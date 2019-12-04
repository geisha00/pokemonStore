import axios from 'axios'

const initialState = {
    loading: false,
    lista: [],
};
const getters = {
    getPokemonByName(state) {

        return (nombre) => {
          //return 'hola' + nombre +'_' + state.loading;
          return state.lista.filter(item => {
            return item.name == nombre
          });
        }
    }
};

const actions = {

    traerPokemon({ commit }, nombre) {
        commit('startLoad');
        return axios
          .get("https://pokeapi.co/api/v2/pokemon/" + nombre)
          .then(respuesta => {
            commit('guardarPokemonsInfo', respuesta.data);
            return respuesta.data;
          })
          .catch(err => {
            console.warn('Ha fallado la peticion HTTP');
          })
          .finally(() => {
            commit('endLoad');
          });
      },
      traerPokemons({ commit }) {
        commit('startLoad');
        axios
          .get("https://pokeapi.co/api/v2/pokemon/")
          .then(respuesta => {
            commit('guardarPokemons', respuesta.data.results);
            console.log(respuesta.data.results)
          })
          .catch(err => {
            console.warn('Ha fallado la peticion HTTP');
          })
          .finally(() => {
            commit('endLoad');
          });
      },
    };

const mutations ={
    startLoad(state) {
        state.loading = true;
      },
      endLoad(state) {
        state.loading = false;
      },
      guardarPokemons(state, lista) {
        state.lista = lista;
      },
      guardarPokemonsInfo(state, datos) {
        console.log(datos);
        for (let i = 0; i < state.lista.length; i++) {
          if (state.lista[i].name === datos.name) {
            state.lista[i].info = datos;
            break;
          }
        }
    },
    };


export default{
    namespaced:true,
    state: initialState,
    getters,
    actions,
    mutations,
}