import getPokemonIds from "@/helpers/getPokemonIds";
import axios from "axios";

export default {
    baseUrl: 'https://pokeapi.co/api/v2/pokemon',
    getPokemonNames: async function (numberPokemon = 4) {
        try{
            return await Promise.all(getPokemonIds(numberPokemon).map(async (pokemonId) => {
                const { data : pokemon } = await axios.get(`${this.baseUrl}/${pokemonId}`);
                return {
                    id: pokemonId,
                    name: pokemon.name
                };
            }));
        }catch (e) {
            throw e;
        }

    }
}