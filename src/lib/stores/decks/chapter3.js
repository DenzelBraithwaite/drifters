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
            id: 'chapter3-2a',
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
            id: 'chapter3-2b',
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
            id: 'chapter3-2c',
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
            id: 'chapter3-2d',
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
            id: 'chapter3-2e',
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

        // Temptress TODO: DIAMOND - She is one of the 8 special chars that will be revealed as a victim. She was a hooker / prostitute
        {
            id: 'chapter3-3a',
            imgUrl: '/decks/chapter3/temptress.png',
            title:'Luna',
            text: "Hey there, what's a nice strong looking man like you doing in a kingdom like this?",
            faction: 'Witch',
            textLeft: "Oh um, I'm not really sure. I kind of just got used to jumping around at this point.",
            textRight: "Looking for somebody like you.",
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
            id: 'chapter3-3b',
            imgUrl: '/decks/chapter3/temptress.png',
            title:'Luna',
            text: "You look like someone who could use someone like me.",
            faction: 'Witch',
            textLeft: "Very smooth, but I think I better not.",
            textRight: "I don't think I could trust myself alone with you.",
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
            id: 'chapter3-3c',
            imgUrl: '/decks/chapter3/temptress.png',
            title:'Luna',
            text: "You looking for answers? Come with me, I don't bite.",
            faction: 'Witch',
            textLeft: "Sorry, something about you is too shady.",
            textRight: "Something tells me you have the answer to a question I'm not asking.",
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
            id: 'chapter3-3d',
            imgUrl: '/decks/chapter3/temptress.png',
            title:'Luna',
            text: "They call me Luna the temptress witch, just because I enjoy a good night of company. You should know more than anyone that I'm not a witch.",
            faction: 'Witch',
            textLeft: "Me? It's true that you don't seem like a witch, but you never know.",
            textRight: "A temptress maybe, but a witch? No, I don't think so.",
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
            id: 'chapter3-3e',
            imgUrl: '/decks/chapter3/temptress.png',
            title:'Luna',
            text: "There's something about this kingdom that feels like a home away from home, you know?",
            faction: 'Witch',
            textLeft: "This place feels like home? Maybe you had a similar life in your old town.",
            textRight: "Feels more like a nightmare away from home to me.",
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

        // Blacksmith's wife TODO: HEART - She is one of the 8 special chars that will be revealed as a victim. She was Jack's ex.
        {
            id: 'chapter3-4a',
            imgUrl: '/decks/chapter3/bullisia.png',
            title:'Bullisia',
            text: "The name's Bullisia, my husband and I are blacksmiths who run a shop in the outskirts of the kingdom. You should pass by sometime.",
            faction: 'Blacksmith',
            textLeft: "Will do, except I don't have any weapons. Maybe I can buy one, although I'm not sure if I need one.",
            textRight: "You look... so familiar.",
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
            id: 'chapter3-4b',
            imgUrl: '/decks/chapter3/bullisia.png',
            title:'Bullisia',
            text: "Why do you prolong your gaze when looking at me? If there's something you wish to get off your mind, speak.",
            faction: 'Blacksmith',
            textLeft: "I know you, your name isn't Bullisia and you aren't a blacksmith. I just can't remember where I know you from.",
            textRight: "I'm sorry, it's probably nothing.",
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
            id: 'chapter3-4c',
            imgUrl: '/decks/chapter3/bullisia.png',
            title:'Bullisia',
            text: "Looking at you now, you do seem familiar. Your eyes seem kind but... I don't know. There's something about you.",
            faction: 'Blacksmith',
            textLeft: "I feel the same. As if you are one of the things I'm meant to remember.",
            textRight: "I'm starting to question if my eyes reflect my soul, or if they hide the truth.",
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
            id: 'chapter3-4d',
            imgUrl: '/decks/chapter3/bullisia.png',
            title:'Bullisia',
            text: "I don't want to be here anymore... please help me.",
            faction: 'Blacksmith',
            textLeft: "I'm trying to escape but I don't know how...",
            textRight: "I won't leave without you!",
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
            id: 'chapter3-4e',
            imgUrl: '/decks/chapter3/bullisia.png',
            title:'Bullisia',
            text: "Everything is jumbled in my head, am I a blacksmith who lives here? Am I a prisoner held against her will? I just don't know anymore.",
            faction: 'Blacksmith',
            textLeft: "I will find the answers to all of this and put a stop to Jude's sick game.",
            textRight: "Once I get my memory back, things will be different.",
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
        
]);

export default chapter3;