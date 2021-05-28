import {formatName} from "../utils/format_pokemon";

export default class PokemonModel {
    constructor(name = '', height = '', weight = '', types = '', imageURL = '') {
        this.name = name
        this.height = height
        this.weight = weight
        this.types = types
        this.imageURL = imageURL
    }

    static _fromJson(json) {
        let types = ''
        json.types.forEach((type, key) => {
            types += formatName(type.type.name)

            if (key !== json.types.length - 1) {
                types += ', '
            }
        })
        types = types.trim()
        const {front_default} = json.sprites
        const name = formatName(json.name)
        return new PokemonModel(name, json.height, json.weight, types, front_default)
    }

    static _fromArray(arr) {
        return arr.map((a) => {
            return PokemonModel._fromJson(a)
        })
    }
}
