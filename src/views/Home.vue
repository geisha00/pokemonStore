<template>
  <div class="home">
   
    <!--<ul>
    <li v-for="item in cancion" :key="item.numero">
      <router-link :to="'/detalle/' +item.numero">
      {{item.numero}}:{{item.nombre}}
      </router-link>
      </li>
      </ul> -->


    
    <h1 v-if ="$store.state.pokemon.loading" >..cargando</h1>

    <div>
      <hr/>
      <PokemonListItem
        v-for="item in $store.state.pokemon.lista"
        :key= "item.name"
        :nombre= "item.name"
      />
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonListItem from '@/components/PokemonListItem.vue'

export default {
  name: 'home',
  components: {
    PokemonListItem
  },
  created(){
  this.$store.dispatch('pokemon/traerPokemons');
  },
}
</script>
