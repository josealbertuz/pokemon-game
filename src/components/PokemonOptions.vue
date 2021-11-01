<template>
  <div class="options-wrapper">
    <button data-testid="reset" @click="$emit('resetGame')">Reset</button>
    <button data-testid="hint" @click="$emit('removePossibleAnswers')">Hint</button>
    <button data-testid="next" @click="$emit('nextPokemon')">Next</button>
  </div>
</template>

<script>
export default {
  name: "PokemonOptions"
}
</script>

<style scoped>
  .options-wrapper {
    margin-top: 5em;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  button {
    font-size: 2rem;
    font-family: "Press Start 2P", sans-serif;
    padding: 0.5em 1em;
    background-color: #f7c41a;

  }
</style>