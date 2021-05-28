import {formatName} from "../utils/format_pokemon";

export default class PokemonGeneralModel {
    constructor(name = '', url = '',) {
        this.name = name
        this.url = url
    }



    static _fromJson(json) {
        const name = formatName(json.name)
        return new PokemonGeneralModel(name, json.url, )
    }

    static _fromArray(arr) {
        return arr.map((a) => {
            return PokemonGeneralModel._fromJson(a)
        })
    }
}
