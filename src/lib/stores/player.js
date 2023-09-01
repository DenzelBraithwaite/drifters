import { writable } from 'svelte/store';

const player = writable({
    name: 'Jack',
    timesReborn: 0,
    unlockedCards: [],
    activeDeck: 'tutorial',
    unlockedDeck: {
        tutorial1: true,
        tutorial2: false,
        tutorial3: false,
        tutorial4: false,
        survey1: true,
        survey2: false,
        survey3: false,
        survey4: false,
        chapter1: false,
        chapter1Soldiers: false,
        chapter2: false,
        chapter3: false,
        chapter4: false,

    },
    displayDecks: ['Tutorial1/Survey1'],
    health: 5,
    sanity: 5,
    energy: 5,
    impulse: 0,
    memory: 0,
});

export default player;