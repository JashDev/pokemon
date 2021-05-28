<template>
  <img
      v-if="isFavorite"
      src="../assets/icons/favorite-star.svg"
      alt="Favorite Star"
      @click.stop="removePokemonFromFavorites"
      class="cursor-pointer"
  >
  <img
      v-else
      src="../assets/icons/normal-star.svg"
      alt="Normal Star"
      @click.stop="addPokemonToFavorites"
      class="cursor-pointer"
  >
</template>

<script>
  import PokemonGeneralModel from "../models/pokemon_general.model";

  export default {
    name: "FavoriteStar",

    props: {
      pokemon: {
        type: PokemonGeneralModel,
        required: true
      }
    },

    computed: {
      favoritePokemon() {
        return this.$store.state.favoritePokemon
      },

      isFavorite() {
        return this.favoritePokemon.some(p => p.name === this.pokemon.name)
      }
    },

    methods: {
      addPokemonToFavorites() {
        this.$store.dispatch('addPokemonToFavorites', this.pokemon)
      },

      removePokemonFromFavorites() {
        this.$store.dispatch('removePokemonFromFavorites', this.pokemon)
      },
    }
  }
</script>

<style scoped>

</style>
