<template>
  <div class="answers-wrapper">
    <ul>
      <li
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          @click="$emit('pokemonSelected', pokemon.id)"
      >{{pokemon.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonPossibleAnswers",
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .answers-wrapper {
    display: flex;
    flex-direction: column;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  ul > li {
    margin-top: 1.5em;
  }

  li {
    cursor: pointer;
    text-align: center;
    background: linear-gradient( #c32222 50%, #ffffff 50%);
    font-size: 1.8rem;
    padding: 0.8em 5em;
    border-radius: 0.8em;
    text-transform: capitalize;
  }

  li:hover {
    background: rgba(213, 212, 212, 0.99);
  }

</style>