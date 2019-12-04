<template>
  <div class="list-item"> 
      <router-link 
      :to="'/detalle/' +nombre" 
      class="list-item"
      tag="div">

      {{nombre}}
      </router-link>
    
  </div>
</template>

<script>
export default {
  name: 'PokemonListItem',
  props: {
   nombre:String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item{
    color:rgb(30, 66, 44);
    padding:30px;
}

</style>