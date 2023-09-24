import { writable } from 'svelte/store';

const goblins = writable([
    // Zig
    {
        id: 'chapter3-g-1a',
        imgUrl: '/decks/chapter3/goblins/goblin-blade.png',
        title:'Zig',
        text: "Looky what we have here, a human.",
        faction: 'Goblin',
        textLeft: "*Run away*",
        textRight: "I hope all goblins aren't this ugly.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
    {
        id: 'chapter3-g-1b',
        imgUrl: '/decks/chapter3/goblins/goblin-blade.png',
        title:'Sting',
        text: "Looky what we have here, a human.",
        faction: 'Goblin',
        textLeft: "*Run away*",
        textRight: "I hope all goblins aren't this ugly.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },

    // Craz
    {
        id: 'chapter3-g-2a',
        imgUrl: '/decks/chapter3/goblins/goblin-child.png',
        title:'Craz',
        text: "Looky what we have here, a human.",
        faction: 'Goblin',
        textLeft: "*Run away*",
        textRight: "I hope all goblins aren't this ugly.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },

    // Ruck
    {
        id: 'chapter3-g-3a',
        imgUrl: '/decks/chapter3/goblins/goblin-old.png',
        title:'Ruck',
        text: "Looky what we have here, a human.",
        faction: 'Goblin',
        textLeft: "*Run away*",
        textRight: "I hope all goblins aren't this ugly.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },

    // Gerg
    {
        id: 'chapter3-g-4a',
        imgUrl: '/decks/chapter3/goblins/goblin-ponytail.png',
        title:'Gerg',
        text: "Looky what we have here, a human.",
        faction: 'Goblin',
        textLeft: "*Run away*",
        textRight: "I hope all goblins aren't this ugly.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },

    // Oorh
    {
        id: 'chapter3-g-5a',
        imgUrl: '/decks/chapter3/goblins/goblin-woman.png',
        title:'Oorh',
        text: "Looky what we have here, a human.",
        faction: 'Goblin',
        textLeft: "*Run away*",
        textRight: "I hope all goblins aren't this ugly.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
            aura: 0,
        }
    },
]);

export default goblins;