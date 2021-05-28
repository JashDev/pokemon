<template>
  <div class="w-[315px] sm:w-[570px] text-[22px] mb-[10px] cursor-pointer" @click="openPokemonInfo">
    <div class="flex items-center justify-between w-full h-[60px] bg-white rounded-[5px] pl-[20px] pr-[10px]">
      {{ pokemon.name }}
      <favorite-star :pokemon="pokemon"/>
    </div>
  </div>
</template>

<script>
  import PokemonGeneralModel from "../models/pokemon_general.model";
  import FavoriteStar from "./FavoriteStarComponent";

  export default {
    name: "PokemonGeneralCardComponent",
    components: {FavoriteStar},
    props: {
      pokemon: {
        type: PokemonGeneralModel,
        required: true
      }
    },

    methods: {
      openPokemonInfo() {
        this.$store.dispatch('toggleShowPokemonModal', true)
        this.$store.dispatch('toggleNamePokemonInModal', this.pokemon)
      }
    }
  }
</script>

<style scoped>

</style>
