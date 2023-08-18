import { writable } from 'svelte/store';

const player = writable({
    name: 'Unkown',
    timesReborn: 0,
    cardsDiscovered: [],
    health: 5,
    sanity: 5,
    hunger: 5,
    impulse: 5,
    memory: 0,
});

export default player;