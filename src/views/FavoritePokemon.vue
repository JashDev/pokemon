<template>
  <div>
    <div class="flex justify-center items-center w-full mt-[35px] mb-[40px]">
      <input-search-component v-model="querySearch"/>
    </div>
    <div class="flex items-center flex-col mb-[10px]">
      <pokemon-general-card-component
          v-for="pokemon in pokemonFavoriteFiltered"
          :key="pokemon.name"
          :pokemon="pokemon"
      />
    </div>
    <not-found-component
        :is-route="false"
        @click-button="resetFilter"
        v-if="pokemonFavoriteFiltered.length === 0 && querySearch.length > 0"
    />
  </div>
</template>

<script>
  import PokemonGeneralCardComponent from "../components/PokemonGeneralCardComponent";
  import InputSearchComponent from "../components/InputSearchComponent";
  import NotFoundComponent from "../components/NotFoundComponent";

  export default {
    name: "FavoritePokemon",
    components: {NotFoundComponent, InputSearchComponent, PokemonGeneralCardComponent},

    data: () => ({
      querySearch: '',
      pokemonFavoriteFiltered: [],
    }),

    watch: {
      querySearch(n) {
        if (!n || n.length === 0) {
          this.pokemonFavoriteFiltered = this.favoritePokemon
          return
        }

        this.pokemonFavoriteFiltered = this.favoritePokemon.filter(p => p.name.toLowerCase().includes(n.toLowerCase()))
      },

      favoritePokemon() {
        if (!this.querySearch || this.querySearch.length === 0) {
          this.pokemonFavoriteFiltered = this.favoritePokemon
          return
        }

        this.pokemonFavoriteFiltered = this.favoritePokemon.filter(p => p.name.toLowerCase().includes(this.querySearch.toLowerCase()))
      }
    },

    computed: {
      favoritePokemon() {
        return this.$store.state.favoritePokemon
      }
    },

    mounted() {
      this.resetFilter()
    },

    methods: {
      resetFilter() {
        this.querySearch = ''
        this.pokemonFavoriteFiltered = this.favoritePokemon
      }
    }
  }
</script>

<style scoped>

</style>
