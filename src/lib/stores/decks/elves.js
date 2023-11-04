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
            aura: 2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 2,
            aura: 2,
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
            aura: 2,
        },
        location: 'Magical Forest'
    },

    // Eldia
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
        text: "It's my duty to watch out for hostiles that may pose a threat to the Inquious tribe, and I DO NOT LIKE HUMANS, so BEAT IT!",
        faction: 'Elf',
        textLeft: "I never knew elves were accustomed to having conversations WHILE YELLING!",
        textRight: "You need to take a whole bottle of chill pills.",
        actionLeft: {
            health: 2,
            aura: -2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 0,
            aura: 2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-3b',
        imgUrl: '/decks/chapter2/elves/elf-angry.png',
        title:'Fenris',
        text: "Us Inquious elves used to be regarded as nobles even amongst the highest of elves! But, then jealousy struck amongst some of the others.",
        faction: 'Elf',
        textLeft: "So I've heard, sounds like you might've deserved it.",
        textRight: "Stay strong, the elves are a proud people.",
        actionLeft: {
            health: 2,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: -2,
            memory: 0,
            aura: 2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-3c',
        imgUrl: '/decks/chapter2/elves/elf-angry.png',
        title:'Fenris',
        text: "Those cowards, they came during the night when we couldn't defend ourselves. To add insult to injury, they paid you filthy humans to do it. You'll do anything for money, won't you.",
        faction: 'Elf',
        textLeft: "Not all humans are the same, just like not all elves are the same.",
        textRight: "They wouldn't have to pay me to set you straight.",
        actionLeft: {
            health: 0,
            aura: 2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 2,
            aura: -2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-3d',
        imgUrl: '/decks/chapter2/elves/elf-angry2.png',
        title:'Fenris',
        text: "My name is Fenris, I don't much care to know yours.",
        faction: 'Elf',
        textLeft: "Well jokes on you, I don't even know my name.",
        textRight: "The names Jack, and it was not a pleasure to meet you.",
        actionLeft: {
            health: -2,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: -2,
            memory: 2,
            aura: 2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-3e',
        imgUrl: '/decks/chapter2/elves/elf-angry2.png',
        title:'Fenris',
        text: "*mutters* Filthy human...",
        faction: 'Elf',
        textLeft: "*roll eyes*",
        textRight: "Filthy elf...",
        actionLeft: {
            health: -2,
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

    // Estelle
    {
        id: 'chapter2-e-4a',
        imgUrl: '/decks/chapter2/elves/elf-archer-green.png',
        title:'Estelle',
        text: "You see this yellow bow? Isn't it pretty? I could probably trade it for at least 2 small human slaves.",
        faction: 'Elf',
        textLeft: "That's awful.",
        textRight: "That's an ugly bow you got there.",
        actionLeft: {
            health: -2,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 2,
            aura: 0,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-4b',
        imgUrl: '/decks/chapter2/elves/elf-archer-green.png',
        title:'Estelle',
        text: "My tribe has been on edge ever since... the incident. I can't even go out hunting without them getting on my case.",
        faction: 'Elf',
        textLeft: "You should show them that you can take care of yourself.",
        textRight: "Don't let them stop you, sneak out if you have to.",
        actionLeft: {
            health: 0,
            aura: -2,
            memory: 2,
        },
        actionRight: {
            health: 2,
            aura: -2,
            memory: 2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-4c',
        imgUrl: '/decks/chapter2/elves/elf-archer-green.png',
        title:'Estelle',
        text: "Most of the elves dislike humans, but I don't mind them. They're weak and uneducated, plus they're short and have weird ears. They're harmless and easier to hunt than wild animals.",
        faction: 'Elf',
        textLeft: "... I'm sorry what?",
        textRight: "I hope your tribe dies out in this forest.",
        actionLeft: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 2,
            aura: 2,
            memory: 2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-4d',
        imgUrl: '/decks/chapter2/elves/elf-archer-green.png',
        title:'Estelle',
        text: "Hello human, the name's Estelle. I'm one of the surviving Inquious elves! Would you like to pledge your fealty to us?",
        faction: 'Elf',
        textLeft: "I think I'll pass.",
        textRight: "Aren't you the elves that got killed by a bunch of humans? Sounds like you should be pledging your fealty to us.",
        actionLeft: {
            health: 2,
            aura: 2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            aura: 2,
            memory: 2,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-4e',
        imgUrl: '/decks/chapter2/elves/elf-archer-green.png',
        title:'Estelle',
        text: "People are excited to see the fairies and magical creatures in this forest, do they not realize there are elves here as well? They should be lining up to meet us.",
        faction: 'Elf',
        textLeft: "Elves may feel superior, but in reality you're just taller humans with pointy ears and a dash of magic.",
        textRight: "At least the fairies are kind to other creatures.",
        actionLeft: {
            health: 2,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: -2,
            aura: 0,
            memory: 0,
        },
        location: 'Magical Forest'
    },

    // Aradora
    {
        id: 'chapter2-e-5a',
        imgUrl: '/decks/chapter2/elves/elf-archer-white.png',
        title:'Aradora',
        text: "I hate it when humans can't get my name right, it's A-r-a-d-o-r-a not 'Arador'. That's a male elf's name! *hmph*",
        faction: 'Elf',
        textLeft: "Pleasure to make your acquaintance Aradora",
        textRight: "Nice to meet you Arador.",
        actionLeft: {
            health: -2,
            aura: 2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            aura: 2,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-5b',
        imgUrl: '/decks/chapter2/elves/elf-archer-white.png',
        title:'Aradora',
        text: "Estelle thinks she's the best hunter amongst the Inquious, but I usually let her win to keep her spirits high. She needs that now more than ever...",
        faction: 'Elf',
        textLeft: "That's very kind of you, for an elf.",
        textRight: "That's very kind of you.",
        actionLeft: {
            health: 2,
            aura: -2,
            memory: 0,
        },
        actionRight: {
            health: -2,
            aura: -2,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-5c',
        imgUrl: '/decks/chapter2/elves/elf-archer-white.png',
        title:'Aradora',
        text: "Where has Aradora gone now? You, human, have you seen a green elf with a yellow bow?",
        faction: 'Elf',
        textLeft: "I'd really prefer if you just ask my name instead of referring to me as 'human'.",
        textRight: "Nope, no idea where she could be.",
        actionLeft: {
            health: 2,
            aura: 0,
            memory: 0,
        },
        actionRight: {
            health: 2,
            aura: 2,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-5d',
        imgUrl: '/decks/chapter2/elves/elf-archer-white.png',
        title:'Aradora',
        text: "Don't worry, I won't give you a hard time for being a human like the other elves do. It's not your fault after all.",
        faction: 'Elf',
        textLeft: "Thank you?",
        textRight: "Wow, that felt a bit back handed.",
        actionLeft: {
            health: -2,
            aura: -2,
            memory: 0,
        },
        actionRight: {
            health: 0,
            aura: 0,
            memory: 0,
        },
        location: 'Magical Forest'
    },
    {
        id: 'chapter2-e-5e',
        imgUrl: '/decks/chapter2/elves/elf-archer-white.png',
        title:'Aradora',
        text: "Have the other Inquious elves mentioned an attack on our tribe, orchestrated by elves but realised by humans? The thing is... that never happened. I'm not sure why they all think that, but we were somewhere else before this forest, I just can't remember where... you probably think I'm delusional.",
        faction: 'Elf',
        textLeft: "I believe you, but if I were you I'd try to remind the other elves before it's too late.",
        textRight: "I don't think you're delusional, many of us have memory loss and false memories. Yet, many seem to have accepted this world as their own. I wonder what's different between them and us?",
        actionLeft: {
            health: -2,
            aura: -2,
            memory: 2,
        },
        actionRight: {
            health: 2,
            aura: 0,
            memory: 2,
        },
        location: 'Magical Forest'
    },

]);

export default elves;