<script>
  import { fade } from 'svelte/transition'
  export let pokeman;
</script>

<div> 
  <a class="p-5 bg-gray-200 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" 
  href={`/pokemon/${pokeman.id}`} in:fade="{{duration: 500}}">
  <img class="h-40 w-40" src={pokeman.image} alt={pokeman.name}>
  <h2 class="uppercase text-xl font-medium">{pokeman.id}. {pokeman.name}</h2>
  </a>
</div>
