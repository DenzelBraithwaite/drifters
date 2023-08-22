import { writable } from 'svelte/store';

export const allDecks = writable({
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
            title:'Mr. Gallock',
            text: 'Shoot, it seems the pests are at my crop again, can you lend me a hand?',
            faction: 'Farmer',
            textLeft: "I have no time for that!",
            textRight: "Sure, I guess I'm not in a rush",
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
            location: 'Town of Beginning'
        },
        card2: {
            imgUrl: '/decks/chapter1/angry-cowboy.png',
            title:'Mr. Gallock',
            text: 'Those damn Jamison boys are ruining this village, either talk to their parents or I will.',
            faction: 'Farmer',
            textLeft: "I have no time for that!",
            textRight: "Sure, I guess I'm not in a rush",
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
            location: 'Town of Beginning'
        },
        card3: {
            imgUrl: '/decks/chapter1/archer.png',
            title:'Shelly',
            text: 'The wild animals have been frightened lately, can you do something about it?',
            faction: 'Hunter',
            textLeft: "I have no time for that!",
            textRight: "Sure, I guess I'm not in a rush",
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
            location: 'Town of Beginning'
        },
        card4: {
            imgUrl: '/decks/chapter1/archer.png',
            title:'Shelly',
            text: "I need to make more arrows, but there aren't any good stones around",
            faction: 'Hunter',
            textLeft: "I have no time for that!",
            textRight: "Sure, I guess I'm not in a rush",
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
            location: 'Town of Beginning'
        },
        card5: {
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Krystina',
            text: "The aging curse that's been put on me is getting worse, can you help me",
            faction: 'Villager',
            textLeft: "I'll have my friend take a look!",
            textRight: "You look fine to me",
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
            location: 'Town of Beginning'
        },
        card6: {
            imgUrl: '/decks/chapter1/gatherer.png',
            title:'Krystina',
            text: "These flowers smell lovely, please don't steal them from me",
            faction: 'Villager',
            textLeft: "Well I wasn't going to until you said that...",
            textRight: "I won't I promise, but can I smell too?",
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
            location: 'Town of Beginning'
        },
        card7: {
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
            location: 'Town of Beginning'
        },
        card8: {
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

// For resetting the game
export const newDeck = writable({...allDecks});