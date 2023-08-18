import { writable } from 'svelte/store';

const allDecks = writable({
    tutorial: {
        firstCard: {
            imgUrl: '/decks/tutorial/question-mark.png',
            title:'Onboarding',
            text: 'Welcome drifter, would you like to play the tutorial?',
            faction: 'Tutorial',
            textLeft: "Nah, I know what I'm doing",
            textRight: 'Yes please!',
            actionLeft: {
                health: -1,
                sanity: -1,
                hunger: -1,
                impulse: -1,
                memory: -1,
            },
            actionRight: {
                health: 1,
                sanity: 1,
                hunger: 1,
                impulse: 1,
                memory: 1,
            },
        }
    },
    intro: {
        firstCard: {
            imgUrl: '/decks/tutorial/question-mark.png',
            title:'Awakening',
            text: 'Welcome back, how was it?',
            faction: 'Unkown',
            textLeft: 'What?',
            textRight: 'Where am I?',
            actionLeft: {
                health: 0,
                sanity: 0,
                hunger: 0,
                impulse: 0,
                memory: 0,
            },
            actionRight: {
                health: 0,
                sanity: 0,
                hunger: 0,
                impulse: 0,
                memory: 0,
            },
        }
    },
});

export default allDecks;