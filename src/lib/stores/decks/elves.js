import { writable } from 'svelte/store';

const elves = writable([
    // Aldwin
    {
        id: 'chapter2-e-1a',
        imgUrl: '/decks/chapter2/elves/elf-male.png',
        title:'Aldwin',
        text: "You must be a human, oh I hoped I wouldn't run into one. I must ask you to leave at once.",
        faction: 'Elf',
        textLeft: "So elves are jerks after all, well I'm not going anywhere.",
        textRight: "Well I was excited to meet an elf until now.",
        actionLeft: {
            health: 2,
            aura: 2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 0,
            aura: -2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-1b',
        imgUrl: '/decks/chapter2/elves/elf-male.png',
        title:'Aldwin',
        text: "This forest was better when there wasn't a bunch of humans. I'm so sorry you were born one.",
        faction: 'Elf',
        textLeft: "Your people must really look down on us...",
        textRight: "Well I didn't choose to be here, but I bet it'd be even better without elves!",
        actionLeft: {
            health: 2,
            aura: 2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 0,
            aura: -2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-1c',
        imgUrl: '/decks/chapter2/elves/elf-male.png',
        title:'Aldwin',
        text: "Elves don't hate humans, we tolerate them well. But humans have a habit of insulting our people, and we do not take kindly to that.",
        faction: 'Elf',
        textLeft: "Don't take it personally, we even insult each other.",
        textRight: "You insult us way more than we insult you.",
        actionLeft: {
            health: 0,
            aura: 2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 0,
            aura: -2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-1d',
        imgUrl: '/decks/chapter2/elves/elf-male-smile.png',
        title:'Aldwin',
        text: "You humans have such adorable, tiny little ears.",
        faction: 'Elf',
        textLeft: "Um, ok...",
        textRight: "And you elves have such repulsive, pointy looking ears.",
        actionLeft: {
            health: 0,
            aura: 1,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 1,
            aura: 1,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-1e',
        imgUrl: '/decks/chapter2/elves/elf-male-smile.png',
        title:'Aldwin',
        text: "I just don't understand why you're still here.",
        faction: 'Elf',
        textLeft: "I'll leave when I'm ready, hopefully.",
        textRight: "I don't understand why you're still here.",
        actionLeft: {
            health: -2,
            aura: 2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 2,
            aura: 1,
        },
        location: 'Magical Forest'
    },

    // Eldia Villager
    {
        id: 'chapter2-e-2a',
        imgUrl: '/decks/chapter2/elves/elf-villager.png',
        title:'Eldia',
        text: "You must leave this forest, the elves do not take kindly to most humans.",
        faction: 'Elf',
        textLeft: "You elves seem to think this forest belongs to you.",
        textRight: "Don't you worry about me, I can take care of myself.",
        actionLeft: {
            health: 2,
            aura: -2,
            memory: 0,
        },
        actionRight: {
            health: -2,
            memory: 0,
            aura: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-2b',
        imgUrl: '/decks/chapter2/elves/elf-villager.png',
        title:'Eldia',
        text: "I'm sorry if the other elves are cruel to you, they're actually good people.",
        faction: 'Elf',
        textLeft: "We must have different definitions of the word 'good'.",
        textRight: "I'll believe it when I see it.",
        actionLeft: {
            health: 2,
            aura: 0,
            memory: 2,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-2c',
        imgUrl: '/decks/chapter2/elves/elf-villager.png',
        title:'Eldia',
        text: "You don't look well, you should rest. I used to take care of my father before he passed, I guess some things never change.",
        faction: 'Elf',
        textLeft: "May he rest in peace.",
        textRight: "I'm not your father",
        actionLeft: {
            health: 0,
            aura: 2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 0,
            aura: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-2d',
        imgUrl: '/decks/chapter2/elves/elf-villager-hand.png',
        title:'Eldia',
        text: "My name is Eldia, I'm the eldest of the remaining Inquious tribe. Although most of us have perished, there are still a few who've found safe haven in these woods.",
        faction: 'Elf',
        textLeft: "Whoever massacred your tribe deserves the same be done to them ten fold.",
        textRight: "Shouldn't you be in hiding then, instead of announcing who you are?",
        actionLeft: {
            health: -2,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-2e',
        imgUrl: '/decks/chapter2/elves/elf-villager-hand.png',
        title:'Eldia',
        text: "Please, be careful in this forest.",
        faction: 'Elf',
        textLeft: "Is that a threat or a warning?",
        textRight: "I'm always careful.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 2,
            aura: 0,
        },
        location: 'Magical Forest'
    },

    // Fenris
    {
        id: 'chapter2-e-3a',
        imgUrl: '/decks/chapter2/elves/elf-angry.png',
        title:'Fenris',
        text: "I'm an elf.",
        faction: 'Elf',
        textLeft: "So elves are jerks after all, well I'm not going anywhere.",
        textRight: "Well I was excited to meet an elf until now.",
        actionLeft: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            memory: 0,
            aura: -1,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-3d',
        imgUrl: '/decks/chapter2/elves/elf-angry2.png',
        title:'Fenris',
        text: "I'm an elf.",
        faction: 'Elf',
        textLeft: "So elves are jerks after all, well I'm not going anywhere.",
        textRight: "Well I was excited to meet an elf until now.",
        actionLeft: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            memory: 0,
            aura: -1,
        },
        location: 'Magical Forest'
    },

    // Elf Archer Green
    {
        id: 'chapter2-e-4a',
        imgUrl: '/decks/chapter2/elves/elf-archer-green.png',
        title:'Estelle',
        text: "I'm an elf.",
        faction: 'Elf',
        textLeft: "So elves are jerks after all, well I'm not going anywhere.",
        textRight: "Well I was excited to meet an elf until now.",
        actionLeft: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            memory: 0,
            aura: -1,
        },
        location: 'Magical Forest'
    },

    // Elf Archer White
    {
        id: 'chapter2-e-5a',
        imgUrl: '/decks/chapter2/elves/elf-archer-white.png',
        title:'Aradora',
        text: "I'm an elf.",
        faction: 'Elf',
        textLeft: "So elves are jerks after all, well I'm not going anywhere.",
        textRight: "Well I was excited to meet an elf until now.",
        actionLeft: {
            health: 1,
            aura: -1,
            memory: 0,
        },
        actionRight: {
            health: 1,
            memory: 0,
            aura: -1,
        },
        location: 'Magical Forest'
    },

]);

export default elves;