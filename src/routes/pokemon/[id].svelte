<script context="module">
  export async function load({page}) {
    const id = page.params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();

    return { 
      props: {pokeman}
    }
  }
</script>
<script>
  export let pokeman;

  let name = pokeman.name;
  
  //type differentiater
  let count = 0;
  if ( pokeman.types[0].slot == '1') {
    if ( pokeman.types[1] ) {
      count = 2;
    }
    else count = 0;
  }

  //capitalizing the first letter
  function toCap(arg) {
    return arg = arg[0].toUpperCase() + arg.slice(1)
  }

  //getting which type is the pokemon
  const type = pokeman.types[0].type.name

  //setting the value
  let firstType = toCap(type)
  let capName = toCap(name)
</script>
<svelte:head>
  <title>{capName}</title>
</svelte:head>
<div class="flex flex-col items-center">
  <h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
  <div class="grid md:grid-cols-3 grid-cols-2 gap-3 text-base">
    <p>
      {#if count > 1}
      Dual-Type: <strong>{firstType}</strong> / <strong>{toCap(pokeman.types[1].type.name)}</strong> 
      {:else}
      Single-Type: <strong>{firstType}</strong>
      {/if}
    </p>
    <p>Heights: <strong>{pokeman.height}</strong></p>
    <p>Weight: <strong>{pokeman.weight}</strong></p>
    <p>Base EXP:  <strong>{pokeman.base_experience}</strong></p>
    {#each pokeman.stats as groupStats}
    <div class="gLast">
      {toCap(groupStats.stat.name)}: <strong>{groupStats.base_stat}</strong>
    </div>
    {/each}
  </div>
  <img class="card-image md:h-60 md:w-60 h-44 w-44" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>

<style>
  .gLast:last-child {
    grid-column-end: 3
  }
</style>