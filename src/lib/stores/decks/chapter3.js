import { writable } from 'svelte/store';

const chapter3 = writable([
        // Wizard (twins irl with dark wizard)
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
        {
            id: 'chapter3-1b',
            imgUrl: '/decks/chapter3/wizard.png',
            title:'Geldahn',
            text: "Sometimes, I wonder if I should have become something other than a wizard. Maybe a farmer?",
            faction: 'Wizard',
            textLeft: "I think being a wizard is a lot more badass than being some farmer.",
            textRight: "I respect those who tend to animals, perhaps there's a way for you to do both.",
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
        {
            id: 'chapter3-1c',
            imgUrl: '/decks/chapter3/wizard.png',
            title:'Geldahn',
            text: "I feel connected to someone in Arcana kingdom, I feel them searching for me. Should I avoid them or let them find me?",
            faction: 'Wizard',
            textLeft: "Go with your gut feeling, if you think they mean you harm then fight back. If you're afraid then run. If you're unsure then wait.",
            textRight: "Perhaps you can find them before they can find you.",
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
        {
            id: 'chapter3-1d',
            imgUrl: '/decks/chapter3/wizard.png',
            title:'Geldahn',
            text: "I call myself a wizard, but I don't know if I've ever cast a spell before. Am I truly a wizard?",
            faction: 'Wizard',
            textLeft: "Probably not, most people aren't who they seem in this world. We're all just struggling to remember.",
            textRight: "As long as nobody else knows.",
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
        {
            id: 'chapter3-1e',
            imgUrl: '/decks/chapter3/wizard.png',
            title:'Geldahn',
            text: "I feel him... He's been searching for me since we arrived. We arrived here together didn't we?",
            faction: 'Wizard',
            textLeft: "I don't know.",
            textRight: "Go to him.",
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

        // Dark wizard (twins irl with wizard)
        {
            id: 'chapter3-1b',
            imgUrl: '/decks/chapter3/dark_wizard.png',
            title:'Gahndel',
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
        {
            id: 'chapter3-1b',
            imgUrl: '/decks/chapter3/dark_wizard.png',
            title:'Gahndel',
            text: "The wizard who resembles me, I don't want to frighten him. But I feel as if I must watch over him.",
            faction: 'Wizard',
            textLeft: "Perhaps you should simply go talk to him.",
            textRight: "Yeah stalking from afar can't possibly end poorly.",
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
        {
            id: 'chapter3-1c',
            imgUrl: '/decks/chapter3/dark_wizard.png',
            title:'Gahndel',
            text: "I've been called Gahndel, but something feels wrong with that name. The other wizard is Geldahn isn't he? Why do I know that?",
            faction: 'Wizard',
            textLeft: "Perhaps you two are one soul divided.",
            textRight: "Maybe he's family?",
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
        {
            id: 'chapter3-1d',
            imgUrl: '/decks/chapter3/dark_wizard.png',
            title:'Gahndel',
            text: "There are times I feel as if I've always been a wizard, but I can't seem to case a single spell. Perhaps you could teach me?",
            faction: 'Wizard',
            textLeft: "Time and reality are very strange here, but I'm pretty sure I can't teach you magic.",
            textRight: "Grip your staff and focus inward on your anger festering in your stomach, then release it all at once to create a fireball.",
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
        {
            id: 'chapter3-1e',
            imgUrl: '/decks/chapter3/dark_wizard.png',
            title:'Gahndel',
            text: "I'm Gahndel the wizard, I specialize in the fireball. Truth is, it's the only spell I've ever known. To cast fire, focus inward on your anger festering in your stomach, then release it all at once to create a fireball!",
            faction: 'Wizard',
            textLeft: "This is weird, you don't remember me? Didn't I teach you that, or are you teaching me now?",
            textRight: "That's impressive, I'll have to give it a try one day.",
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