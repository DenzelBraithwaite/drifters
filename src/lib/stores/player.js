import { writable } from 'svelte/store';

const player = writable({
    name: 'Jack',
    timesReborn: 0,
    unlockedCards: [],
    activeDeck: 'survey',
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
        chapter2Elves: false,
        chapter3: false,
        chapter3Goblins: false,
        chapter4: false,

    },
    displayDecks: [
        {
            title: 'Tutorial1 / Survey1',
            img: '/decks/tutorial/judicator-white.png'
        }
    ],
    health: 10,
    sanity: 10,
    aura: 10,
    impulse: 0,
    memory: 0,
});

export default player;