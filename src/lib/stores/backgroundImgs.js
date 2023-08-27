import { writable } from "svelte/store";

const backgrounds = writable({
    active: 'bg__space', // default
    space: 'bg__space',
    adventure: 'bg__adventure',
    darkForest: 'bg__dark-forest',
    cherryBlossom: 'bg__cherry-blossom',
    magicalForest: 'bg__magical-forest',
});

export default backgrounds;