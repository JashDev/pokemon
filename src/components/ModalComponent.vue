<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div v-if="pokemon"
           class="fixed inset-0 flex justify-center items-center  bg-gray-700 bg-opacity-75  transition-opacity"
           aria-hidden="true">
        <div
            class="relative bg-white overflow-hidden transform transition-all rounded-[5px] w-[315px] h-[506px] sm:w-[570px]">
          <div class="absolute top-2 right-2 cursor-pointer" @click="closeModel">
            <img src="../assets/icons/close.svg" alt="close">
          </div>
          <div class="w-full h-[250px] Container flex justify-center items-center">
            <div class="w-[180px] h-[180px] bg-no-repeat bg-cover"
                 :style="`background-image: url('${pokemon.imageURL}')`">
            </div>
          </div>
          <div class="my-[20px]">
            <div
                class="w-[255px]  border-b border-[#E8E8E8] mx-auto mb-[10px] text-left text-[18px] text-pokedex-gray-2">
              <span class="font-bold">Name:</span> {{ pokemon.name }}
            </div>
            <div
                class="w-[255px]  border-b border-[#E8E8E8] mx-auto mb-[10px] text-left text-[18px] text-pokedex-gray-2">
              <span class="font-bold">Weigth:</span> {{ pokemon.weight }}
            </div>
            <div
                class="w-[255px]  border-b border-[#E8E8E8] mx-auto mb-[10px] text-left text-[18px] text-pokedex-gray-2">
              <span class="font-bold">Height:</span> {{ pokemon.height }}
            </div>
            <div
                class="w-[255px]  border-b border-[#E8E8E8] mx-auto mb-[10px] text-left text-[18px] text-pokedex-gray-2">
              <span class="font-bold">Types:</span> {{ pokemon.types }}
            </div>
          </div>

          <div class="flex justify-between items-center px-[30px]">
            <button @click="sharePokemon"
                    class="w-[195px] h-[44px] text-white px-[20px] py-[11px] flex justify-center items-center text-[18px] rounded-[60px] bg-pokedex-red-1">
              Share to my friends
            </button>
            <favorite-star :pokemon="pokemon"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {infoPokemonService} from "../services/pokemon.service";
  import FavoriteStar from "./FavoriteStarComponent";

  export default {
    name: "ModalComponent",
    components: {FavoriteStar},
    data: () => ({
      cancelInfoPokemon: null,
      pokemon: null
    }),

    computed: {
      pokemonSearch() {
        return this.$store.state.namePokemonInModal
      }
    },

    async mounted() {
      await this.infoPokemon()
    },

    beforeDestroy() {
      this.cancelInfoPokemon && this.cancelInfoPokemon()
    },

    methods: {
      async infoPokemon() {
        try {
          const {pokemon} = await infoPokemonService({
            namePokemon: this.pokemonSearch.name,
            cancel: this.cancelInfoPokemon
          })
          this.pokemon = pokemon
        } catch (e) {
          console.dir(e)
        }
      },

      async sharePokemon() {
        const dataToShare = `${this.pokemon.name}: ${this.pokemon.types}`
        await navigator.clipboard.writeText(dataToShare)
        alert('Información copiada')
      },

      closeModel() {
        this.$store.dispatch('toggleShowPokemonModal', false)
        this.$store.dispatch('toggleNamePokemonInModal', null)
      }
    }
  }
</script>

<style scoped>
  .Container {
    background-image: url("../assets/images/field.png");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
