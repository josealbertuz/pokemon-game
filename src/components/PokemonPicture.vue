<template>
    <img :class="revealPokemon" :src="pokemonImage" alt="pokemon-img" />
</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    reveal : {
      type: Boolean,
      default: false
    }
  },
  computed: {
    revealPokemon() {
      return this.reveal ? 'fade-in' : 'image-filter';
    },
    pokemonImage(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 18em;
    min-width: 18em;
    max-height: 18em;
    min-height: 18em;
    -webkit-user-drag: none;
  }

  .fade-in {
    animation: fade-in-animation 1s;
  }

  @keyframes fade-in-animation {
    0% {
      filter: brightness(0);
    }
    100% {
      filter: initial;
    }
  }

  .image-filter {
    filter: brightness(0);
  }
</style>