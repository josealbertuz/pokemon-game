<template>
  <div class="container">
    <h1 class="title">Who's that Pokemon?</h1>
    <PokemonPicture :pokemon-id="chosenPokemonId" :reveal="revealPokemon" />
    <PokemonPossibleAnswers :pokemons="pokemons" @pokemonSelected="checkAnswer" />
    <p class="title">{{points}} points</p>
    <PokemonOptions
        @nextPokemon="nextPokemon"
        @removePossibleAnswers="removePossibleAnswers"
        @resetGame="resetGame"
    />
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonPossibleAnswers from "@/components/PokemonPossibleAnswers";
import PokemonService from "@/services/PokemonService";
import PokemonOptions from "@/components/PokemonOptions";

export default {
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPossibleAnswers,
    PokemonPicture
  },
  data(){
    return {
      pokemons: [],
      chosenPokemonId: 0,
      revealPokemon: false,
      points: 0,
      hints: 2
    }
  },
  methods: {
    async resetGame(){
      this.pokemons = await PokemonService.getPokemonNames();
      this.revealPokemon = false;
      this.points = 0;
      this.hints = 2;
      this.chosenPokemonId = this.pokemons[Math.floor(Math.random() * this.pokemons.length)].id;
    },
    async checkAnswer(pokemonId){
      if (pokemonId !== this.chosenPokemonId) {
        await this.nextPokemon();
        return;
      }
      this.revealPokemon = true;
      this.points++;

    },
    async nextPokemon(){
      if (this.revealPokemon){
        this.revealPokemon = !this.revealPokemon;
      }
      this.hints = 2;
      this.pokemons = await PokemonService.getPokemonNames();
      this.chosenPokemonId = this.pokemons[Math.floor(Math.random() * this.pokemons.length)].id;
    },
    removePossibleAnswers(){

      if (this.hints <= 0){
        return;
      }

      let continueLoop = true;

      while (continueLoop){
        const randomIndex = Math.floor(Math.random() * this.pokemons.length);
        if (this.pokemons[randomIndex].id !== this.chosenPokemonId){
          continueLoop = false;
          this.hints--;
          this.pokemons.splice(randomIndex, 1);
        }
      }

    }
  },
  mounted() {
    this.resetGame();
  },
}
</script>

<style scoped>
  .container {
    padding: 1.5em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container > * {
    margin-top: 1.5em;
  }

  .title {
    font-size: 2rem;
    color: #f7c41a;
    -webkit-text-stroke: 0.055em black;
  }
</style>