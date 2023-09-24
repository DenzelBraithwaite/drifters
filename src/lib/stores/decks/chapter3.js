import { writable } from 'svelte/store';

const chapter3 = writable([
        // Wizard
        {
            id: 'chapter3-1a',
            imgUrl: '/decks/chapter3/wizard.png',
            title:'Geldahn',
            text: "You ever get the feeling you're being followed? I can't shake the feeling that someone's watching me...",
            faction: 'Wizard',
            textLeft: "Isn't there some kind of spell you could cast to find out?",
            textRight: "I'll keep my eye open for you.",
            actionLeft: {
                health: 0,
                aura: 0,
                memory: 0,
            },
            actionRight: {
                health: 0,
                memory: 0,
                aura: 0,
            },
            location: 'Arcana Kingdom'
        },

        // Dark wizard
        {
            id: 'chapter3-1b',
            imgUrl: '/decks/chapter3/dark_wizard.png',
            title:'Geldahn?',
            text: "You might have met an older wizard who resembles me, I'd appreciate it if you kept our little interaction a secret.",
            faction: 'Wizard',
            textLeft: "Your secret is safe with me.",
            textRight: "You seem like you're up to no good.",
            actionLeft: {
                health: 0,
                aura: 0,
                memory: 0,
            },
            actionRight: {
                health: 0,
                memory: 0,
                aura: 0,
            },
            location: 'Arcana Kingdom'
        },

        // Temptress
        {
            id: 'chapter3-1c',
            imgUrl: '/decks/chapter3/temptress.png',
            title:'Luna',
            text: "Hey there, what's a nice strong looking man like you doing in a kingdom like this?",
            faction: 'Witch',
            textLeft: "Oh um, I'm not really sure. I kind of just got used to jumping around at this point.",
            textRight: "Looking for somebody like you.",
            actionLeft: {
                health: 1,
                aura: 1,
                memory: 0,
            },
            actionRight: {
                health: -1,
                memory: 0,
                aura: -1,
            },
            location: 'Arcana Kingdom'
        },
]);

export default chapter3;