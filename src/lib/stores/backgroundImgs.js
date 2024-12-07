import { writable } from "svelte/store";

const backgrounds = writable({
    active: 'bg__dark', // default
    dark: 'bg__dark',
    darkFinal: 'bg__dark_final',
    village: 'bg__village',
    magicalForest: 'bg__magical-forest',
    kingdom: 'bg__kingdom',
    cosmic: 'bg__cosmic'
});

export default backgrounds;