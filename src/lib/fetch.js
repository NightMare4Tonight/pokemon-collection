import supabase from "$lib/client"
import { writable } from "svelte/store"

export const pokemon = writable([])
let loaded = false

export const fetchPokemon = async () => {
	if (loaded) return
	const { data, err } = await supabase.from("gen1Pokemon").select("*")
	if (err) {
		console.log(err.message)
		throw new Error(err.message)
	}
	const loadedPokemon = data.map((data, index) => ({
		name: data.name,
		id: index + 1,
		img: `https://kblgqftpjsqrdkcksltg.supabase.in/storage/v1/object/public/pokemon-collector/gen1/${
			index + 1
		}.png`,
	}))
	pokemon.set(loadedPokemon)
	loaded = true
}
