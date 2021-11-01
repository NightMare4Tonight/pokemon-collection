<script>
  import PokemanCard from '../components/pokemanCard.svelte'
  import { pokemon, fetchPokemon } from '../lib/fetch'

  //searching implementation
  let searchTerm = "";
  let filteredPokemon = [];

  $: {
    if (searchTerm) {
      filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }else {
      filteredPokemon = [...$pokemon]
    }
  }
  fetchPokemon()
</script>

<svelte:head>
  <title>Pokedex Svelte</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex ft. Svelte Kit</h1>

<input class="w-full rounded-md text-lg p-4 mt-0 mb-4 border-2 border-gray-200" 
type="text" 
placeholder="Search Pokemon"
bind:value={searchTerm}>

<div class="text-center">
  <div class="grid gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman}
      <PokemanCard pokeman={pokeman}/>
    {/each}
  </div>
</div>
