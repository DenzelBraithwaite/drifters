import { writable } from "svelte/store";

const backgrounds = writable({
    active: 'bg__space', // default
    space: 'bg__space',
    adventure: 'bg__adventure',
    magicalForest: 'bg__magical-forest',
    river: 'bg__river',
});

export default backgrounds;