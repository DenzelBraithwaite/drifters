import { writable } from "svelte/store";

const backgrounds = writable({
    active: 'bg__kingdom', // default
    dark: 'bg__dark',
    village: 'bg__village',
    magicalForest: 'bg__magical-forest',
    kingdom: 'bg__kingdom',
});

export default backgrounds;