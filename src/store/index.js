import Vue from 'vue'
import Vuex from 'vuex'
import PokemonGeneralModel from "../models/pokemon_general.model";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        favoritePokemon: [],
        showPokemonModal: false,
        namePokemonInModal: null
    },
    mutations: {
        set_loading(state, payload) {
            state.isLoading = payload
        },

        set_favoritePokemon(state, payload) {
            state.favoritePokemon = payload
        },

        set_showPokemonModal(state, payload) {
            state.showPokemonModal = payload
        },

        set_namePokemonInModal(state, payload) {
            state.namePokemonInModal = payload
        }
    },
    actions: {
        handleToggleLoading({commit}, loading) {
            commit('set_loading', loading)
        },

        addPokemonToFavorites({commit, state}, pokemon) {
            const pokemonIsFavorite = state.favoritePokemon.some(p => p.name === pokemon.name)

            if (pokemonIsFavorite) {
                return
            }

            const favoritePokemon = [pokemon, ...state.favoritePokemon]

            localStorage.setItem('favoritePokemon', JSON.stringify(favoritePokemon))
            commit('set_favoritePokemon', PokemonGeneralModel._fromArray(favoritePokemon))
        },

        removePokemonFromFavorites({commit, state}, pokemon) {
            const pokemonIsFavorite = state.favoritePokemon.some(p => p.name === pokemon.name)

            if (!pokemonIsFavorite) {
                return
            }

            const favoritePokemon = state.favoritePokemon.filter(p => p.name !== pokemon.name)

            localStorage.setItem('favoritePokemon', JSON.stringify(favoritePokemon))
            commit('set_favoritePokemon', favoritePokemon)
        },

        toggleShowPokemonModal({commit}, showModal) {
            commit('set_showPokemonModal', showModal)
        },

        toggleNamePokemonInModal({commit}, namePokemon) {
            commit('set_namePokemonInModal', namePokemon)
        }
    },
    modules: {}
})
