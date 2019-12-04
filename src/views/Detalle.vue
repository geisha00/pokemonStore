<template>
  <div class="about">
    <h1>Detalle del pokemon</h1>
    <li>
      <input type="text" v-model="pokemon" />
      <button @click="http()">hacer peticion</button>
    </li>
    <div v-if="error">No hemos encontrado el pokemon</div>

    <div v-else>
      <h1>{{nombre}}</h1>
      <img :src="imagen" />
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  data: () => ({
    nombre: "",
    imagen: "",
    pokemon: "",
    error: false
  }),
  methods: {
    http() {
      const pokemonInfo = this.$store.getters["pokemon/getPokemonByName"](this.pokemon);
      if (pokemonInfo.length ===0 || !pokemonInfo[0].info) {
        console.log('no tenemos la info');
        this.$store.dispatch("pokemon/traerPokemon", this.pokemon)
        .then(datos=>{
          this.pintarPokemon(datos);
        });
      } else {
        console.log("ya tenemos la info", pokemonInfo[0].info);
        this.pintarPokemon(pokemonInfo[0].info);
      }
      console.log(pokemonInfo);

      //this.$store.dispatch("traerPokemon", this.pokemon);
      //this.$store.getters['getPokemonByName']();
    },

    pintarPokemon(data) {
      this.error = false;
      this.nombre = data.name;
      this.imagen = data.sprites.front_default;
    }
  },
  created() {
    this.pokemon = this.$route.params.pokemon || "9";
    this.http();
    //this.$store.dispatch('traerPokemon',this.pokemon);
  }
};
</script>