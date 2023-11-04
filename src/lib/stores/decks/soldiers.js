import { writable } from 'svelte/store';

const soldiers = writable([
    // Oscar
    {
        id: 'chapter1-s-1a',
        imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
        title:'Oscar',
        text: "I've been fighting for as long as I can remember, but I can't seem to remember anything else.",
        faction: 'Soldier',
        textLeft: "We're in the same boat then soldier, but stay strong.",
        textRight: "A life of violence is a wasted one.",
        actionLeft: {
            health: 0,
            memory: 2,
        },
        actionRight: {
            health: -2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-1b',
        imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
        title:'Oscar',
        text: "Why do I always have to do everything around here! Leave me alone, I'm not in the mood.",
        faction: 'Soldier',
        textLeft: "You need to learn to relax before your face stays like that permanently.",
        textRight: "Yeah it must be really hard to pull your own weight.",
        actionLeft: {
            health: 2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-1c',
        imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
        title:'Oscar',
        text: "The other soldiers are a joke, they don't belong in the army.",
        faction: 'Soldier',
        textLeft: "You'd think you'd be the captain then, wouldn't you.",
        textRight: "I'm sure you'd love to go to war alone then.",
        actionLeft: {
            health: 2,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-1d',
        imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
        title:'Oscar',
        text: "Sleep is for the weak, all those slackers do is waste the day away. Useless sacks of potatoes I tell you.",
        faction: 'Soldier',
        textLeft: "Maybe you should do something about it instead of complaining.",
        textRight: "Your hard work is recognized, thank you for your service.",
        actionLeft: {
            health: 2,
            memory: 0,
        },
        actionRight: {
            health: -2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-1e',
        imgUrl: '/decks/chapter1/soldiers/soldier-red.png',
        title:'Oscar',
        text: "I can't talk right now, I need to go train.",
        faction: 'Soldier',
        textLeft: "Sorry to bother you.",
        textRight: "Yes you probably do.",
        actionLeft: {
            health: -2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },

    // August
    {
        id: 'chapter1-s-2a',
        imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
        title:'August',
        text: 'You can never be too careful, always stay on guard and question your surroundings.',
        faction: 'Soldier',
        textLeft: "I do seem to be having a hard time relaxing my guard around here.",
        textRight: "I bet you sleep with one eye open.",
        actionLeft: {
            health: 2,
            memory: 2,
        },
        actionRight: {
            health: -2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-2b',
        imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
        title:'August',
        text: "War is the only thing you can count on, remember that.",
        faction: 'Soldier',
        textLeft: "There's more to life than death and violence.",
        textRight: "Death and taxes friend.",
        actionLeft: {
            health: -2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-2c',
        imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
        title:'August',
        text: "I'd like to find a place to rest my weary bones, this village seems alright.",
        faction: 'Soldier',
        textLeft: "Shouldn't you be doing something?",
        textRight: "I might join you on that, it's not bad here.",
        actionLeft: {
            health: 2,
            memory: 0,
        },
        actionRight: {
            health: -2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-2d',
        imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
        title:'August',
        text: "I never wanted to be a soldier you know, but I was drafted back when I still a child.",
        faction: 'Soldier',
        textLeft: "I'm surprised you managed to stay alive this long.",
        textRight: "You could always fake your death and run away.",
        actionLeft: {
            health: 2,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 2,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-2e',
        imgUrl: '/decks/chapter1/soldiers/soldier-brown.png',
        title:'August',
        text: "If I run away from the army, do you think they'll have me hanged?",
        faction: 'Soldier',
        textLeft: "It's a strong possibility.",
        textRight: "You'll be fine, won't know unless you try.",
        actionLeft: {
            health: -2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },

    // Dedu
    {
        id: 'chapter1-s-3a',
        imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
        title:'Dedu',
        text: "I've come a long way from my home village, the people here do not know war like my people do.",
        faction: 'Soldier',
        textLeft: "Don't judge people before getting to know them, you might be surprised..",
        textRight: "I'm sorry you have to live through that.",
        actionLeft: {
            health: 2,
            memory: 0,
        },
        actionRight: {
            health: -2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-3b',
        imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
        title:'Dedu',
        text: "If I could, I think I would return to my village. But, it's simply not in the cards.",
        faction: 'Soldier',
        textLeft: "Perhaps one day.",
        textRight: "I play with my own deck.",
        actionLeft: {
            health: -2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 2,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-3c',
        imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
        title:'Dedu',
        text: "...",
        faction: 'Soldier',
        textLeft: "He seems to have something on his mind, maybe I should leave him alone.",
        textRight: "...",
        actionLeft: {
            health: -2,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-3d',
        imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
        title:'Dedu',
        text: "You know, you actually remind me of someone I've long since forgotten. I wonder who it was?",
        faction: 'Soldier',
        textLeft: "I couldn't tell you.",
        textRight: "Let me know if you remember.",
        actionLeft: {
            health: -2,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 2,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-3e',
        imgUrl: '/decks/chapter1/soldiers/soldier-black.png',
        title:'Dedu',
        text: "Life isn't all about the glory of battle, but it doesn't hurt to know how to defend yourself.",
        faction: 'Soldier',
        textLeft: "I suppose you're right, but I don't want to hurt anyone.",
        textRight: "If push comes to shove, I can defend myself just fine.",
        actionLeft: {
            health: -2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 2,
        },
        location: 'Town of Beginning'
    },
    

    // Captain Hugo
    {
        id: 'chapter1-s-4a',
        imgUrl: '/decks/chapter1/soldiers/captain.png',
        title:'Hugo',
        text: "The names Hugo, you might've met Dedu, August or Oscar already. Those are my men, they're here to help if you need.",
        faction: 'Soldier',
        textLeft: "They seem to be more interested on taking it easy than helping me.",
        textRight: "Thank you, I appreciate the comforting words.",
        actionLeft: {
            health: 2,
            memory: 0,
        },
        actionRight: {
            health: -2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-4b',
        imgUrl: '/decks/chapter1/soldiers/captain.png',
        title:'Hugo',
        text: "My men aren't the greatest, but they're fine men nonetheless. I would take an arrow for any of them.",
        faction: 'Soldier',
        textLeft: "I wish I could serve under you.",
        textRight: "One can only hope they'd do the same for you.",
        actionLeft: {
            health: -2,
            memory: 0,
        },
        actionRight: {
            health: 0,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-4c',
        imgUrl: '/decks/chapter1/soldiers/captain.png',
        title:'Hugo',
        text: "I keep having this dream, one of my men is bleeding out, but I can never reach them in time... what do you think it means?",
        faction: 'Soldier',
        textLeft: 'Maybe you worry too much about the safety of your men?',
        textRight: "Perhaps that's a question only you could answer.",
        actionLeft: {
            health: -2,
            memory: 0,
        },
        actionRight: {
            health: 2,
            memory: 2,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-4d',
        imgUrl: '/decks/chapter1/soldiers/captain.png',
        title:'Hugo',
        text: "I used to overcome my fears on the battlefield, but now it's as if I have no fear at all...",
        faction: 'Soldier',
        textLeft: "You don't need to brag to me, I can already see you're a brave warrior.",
        textRight: "Fear exists in all living beings, perhaps you've just suppressed it.",
        actionLeft: {
            health: -2,
            memory: 0,
        },
        actionRight: {
            health: -2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
    {
        id: 'chapter1-s-4e',
        imgUrl: '/decks/chapter1/soldiers/captain.png',
        title:'Hugo',
        text: "What makes a great leader?",
        faction: 'Soldier',
        textLeft: "Making hard decisions, even if it means abandoning one of your men.",
        textRight: "Listening to your people and allowing everyone to have a say.",
        actionLeft: {
            health: 2,
            memory: 0,
        },
        actionRight: {
            health: -2,
            memory: 0,
        },
        location: 'Town of Beginning'
    },
]);

export default soldiers;