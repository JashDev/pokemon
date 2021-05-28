<template>
  <div>
    <div class="flex justify-center items-center w-full mt-[35px] mb-[40px]">
      <input-search-component v-model="querySearch"/>
    </div>
    <div class="flex items-center flex-col mb-[10px]">
      <pokemon-general-card-component v-for="pokemon in pokemonListFiltered" :key="pokemon.name" :pokemon="pokemon"/>
    </div>

    <not-found-component
        :is-route="false"
        @click-button="resetFilter"
        v-if="pokemonListFiltered.length === 0 && !fetchingData"
    />
  </div>
</template>

<script>
  import PokemonGeneralCardComponent from "../components/PokemonGeneralCardComponent";
  import InputSearchComponent from "../components/InputSearchComponent";
  import NotFoundComponent from "../components/NotFoundComponent";
  import {listPokemonService} from "../services/pokemon.service";

  export default {
    name: "AllPokemon",

    components: {NotFoundComponent, InputSearchComponent, PokemonGeneralCardComponent},

    data: () => ({
      querySearch: '',
      pokemonList: [],
      pokemonListFiltered: [],
      fetchingData: false,

      cancelPokemonList: null
    }),

    watch: {
      querySearch(n) {
        if (!n || n.length === 0) {
          this.pokemonListFiltered = this.pokemonList
          return
        }

        this.pokemonListFiltered = this.pokemonList.filter(p => p.name.toLowerCase().includes(n))
      }
    },

    mounted() {
      this.loadPokemons()
    },

    beforeDestroy() {
      this.cancelPokemonList && this.cancelPokemonList()
    },

    methods: {
      async loadPokemons() {
        this.fetchingData = true
        try {
          const {pokemons} = await listPokemonService({cancel: this.cancelPokemonList})
          this.pokemonList = pokemons
          this.resetFilter()
        } catch (e) {
          this.pokemonList = []
        }
        this.fetchingData = false
      },

      resetFilter() {
        this.querySearch = ''
        this.pokemonListFiltered = this.pokemonList
      },
    }
  }
</script>

<style scoped>

</style>
