import { writable } from 'svelte/store';

const allDecks = writable({
    tutorial: {
        card1: {
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
                memory: 0,
            },
            actionRight: {
                health: 1,
                sanity: 1,
                hunger: 1,
                impulse: 1,
                memory: 0,
            },
            location: 'tutorial'
        },
        card2: {
            imgUrl: '/decks/tutorial/question-mark.png',
            title:'Onboarding',
            text: 'Excellent, then let us begin.',
            faction: 'Tutorial',
            textLeft: "Wait, I've changed my mind!",
            textRight: 'Ready whenever you are',
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
            location: 'tutorial'
        },
        card3: {
            imgUrl: '/decks/tutorial/question-mark.png',
            title:'Onboarding',
            text: "First things first, you'll need to make a lot of decisions. You've done that before, right?",
            faction: 'Tutorial',
            textLeft: "Umm... yes?",
            textRight: 'Of course I have.',
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
            location: 'tutorial'
        },
        card4: {
            imgUrl: '/decks/tutorial/question-mark.png',
            title:'Onboarding',
            text: "Fantastic! I'll be here in case of anything, just remember that forgetting is normal, you're all here to remember.",
            faction: 'Tutorial',
            textLeft: "Wait, that doesn't make any sense...",
            textRight: 'Makes perfect sense to me.',
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
            location: 'tutorial'
        },
        card5: {
            imgUrl: '/decks/tutorial/question-mark.png',
            title:'Onboarding',
            text: "Well then, off you go- oh wait! I almost forgot, there's a few questions I have to ask you before you leave.",
            faction: 'Tutorial',
            textLeft: 'Wait can we just slow down for a minute.',
            textRight: 'This all seems very suspicious...',
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
            location: 'tutorial'
        }
    },
    quiz1: {},
    quiz2: {},
    quiz3: {},
    quiz4: {},
    chapter1: {
        card1: {
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Onboarding',
            text: 'Welcome drifter, would you like to play the tutorial?',
            faction: 'Tutorial',
            textLeft: "Nah, I know what I'm doing",
            textRight: 'Yes please!',
            actionLeft: {
                health: -1,
                sanity: 0,
                hunger: 1,
                impulse: 0,
                memory: 0,
            },
            actionRight: {
                health: 1,
                sanity: 0,
                hunger: -2,
                impulse: 0,
                memory: 0,
            },
            location: 'tutorial'
        },
        card2: {
            imgUrl: '/decks/chapter1/archer.png',
            title:'Onboarding',
            text: 'Excellent, then let us begin.',
            faction: 'Tutorial',
            textLeft: "Wait, I've changed my mind!",
            textRight: 'Ready whenever you are',
            actionLeft: {
                health: -1,
                sanity: 0,
                hunger: 1,
                impulse: 0,
                memory: 0,
            },
            actionRight: {
                health: 1,
                sanity: 0,
                hunger: -2,
                impulse: 0,
                memory: 0,
            },
            location: 'tutorial'
        },
        card3: {
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Onboarding',
            text: "First things first, you'll need to make a lot of decisions. You've done that before, right?",
            faction: 'Tutorial',
            textLeft: "Umm... yes?",
            textRight: 'Of course I have.',
            actionLeft: {
                health: -1,
                sanity: 0,
                hunger: 1,
                impulse: 0,
                memory: 0,
            },
            actionRight: {
                health: 1,
                sanity: 0,
                hunger: -2,
                impulse: 0,
                memory: 0,
            },
            location: 'tutorial'
        },
        card4: {
            imgUrl: '/decks/chapter1/villager.png',
            title:'Onboarding',
            text: "Fantastic! I'll be here in case of anything, just remember that forgetting is normal, you're all here to remember.",
            faction: 'Tutorial',
            textLeft: "Wait, that doesn't make any sense...",
            textRight: 'Makes perfect sense to me.',
            actionLeft: {
                health: -1,
                sanity: 0,
                hunger: 1,
                impulse: 0,
                memory: 0,
            },
            actionRight: {
                health: 1,
                sanity: 0,
                hunger: -2,
                impulse: 0,
                memory: 0,
            },
            location: 'tutorial'
        },
        card5: {
            imgUrl: '/decks/chapter1/villager-old.png',
            title:'Onboarding',
            text: "Well then, off you go- oh wait! I almost forgot, there's a few questions I have to ask you before you leave.",
            faction: 'Tutorial',
            textLeft: 'Wait can we just slow down for a minute.',
            textRight: 'This all seems very suspicious...',
            actionLeft: {
                health: -1,
                sanity: 0,
                hunger: 1,
                impulse: 2,
                memory: 0,
            },
            actionRight: {
                health: 2,
                sanity: 0,
                hunger: 0,
                impulse: -2,
                memory: 0,
            },
            location: 'tutorial'
        }
    },
});

export default allDecks;