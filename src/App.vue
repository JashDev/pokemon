<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

</style>
<script>
  import PokemonGeneralModel from "./models/pokemon_general.model";

  export default {
    mounted() {
      const favoritePokemon = JSON.parse(localStorage.getItem('favoritePokemon') ?? [])
      this.$store.commit('set_favoritePokemon', PokemonGeneralModel._fromArray(favoritePokemon))
    },
  }

</script>
