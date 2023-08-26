import { writable } from 'svelte/store';

const player = writable({
    name: 'Unknown',
    timesReborn: 0,
    unlockedCards: [],
    soldierDeckUnlocked: false,
    health: 6,
    sanity: 6,
    hunger: 6,
    impulse: 6,
    memory: 0,
});

export default player;