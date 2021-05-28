import http from "../utils/http";
import PokemonGeneralModel from "../models/pokemon_general.model";
import PokemonModel from "../models/pokemon_model";

export const listPokemonService = async ({cancel}) => {
    const { data} = await http.get('pokemon', {
        cancelToken: cancel
    })

    const {results} = data
    const pokemons = PokemonGeneralModel._fromArray(results)

    return {
        pokemons
    }
}

export const infoPokemonService = async ({namePokemon, cancel}) => {
    const name = namePokemon.toLowerCase()
    const { data} = await http.get(`pokemon/${name}`, {
        cancelToken: cancel
    })

    const pokemon = PokemonModel._fromJson(data)

    return {
        pokemon
    }
}
