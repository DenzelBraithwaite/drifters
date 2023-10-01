import { writable } from 'svelte/store';

const survey2 = writable([
    {
        id: 'survey2-1',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Fantastic, question number 1. Did you recognize anyone in the village?",
        faction: '???',
        textLeft: "Hmmm... not really.", // Survey2-2
        textRight: "Of course not, It's not like I've met them before.", // Survey2-3
        actionLeft: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-2',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Suppose that makes sense... did you notice anything odd about any of the villagers?",
        faction: '???',
        textLeft: "Actually, most of them seem to be dealing with a case of sudden amnesia as well.", // Survey2-3a
        textRight: 'I think I was more focused on trying to escape than anything.', // Survey2-3b
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-3a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Yes well, truth be told most people who enter that village wander in, lost. Did you remember anything while you were there?",
        faction: '???',
        textLeft: "It might please you to learn that I, along with the rest of the villagers, still do not remember a thing.", // Survey2-4
        textRight: "Still nothing but blanks, when will my memory return?", // Survey2-4
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-3b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "I've told you before that trying to escape is pointless. The best way to leave is to remember, did you remember anything when you were there?",
        faction: '???',
        textLeft: "All I've managed to remember is how much I must've forgotten.", // Survey2-4
        textRight: "Can't blame me for trying, and unfortunately no... Still completely in the dark.", // Survey2-4
        actionLeft: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-4',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Well, you should start to remember soon, most likely by the next time we talk you'll have remembered something important.",
        faction: '???',
        textLeft: "That's very suspicious, it almost sounds as if you have something planned.", // Survey2-5a
        textRight: "Why can't I remember now?", // Survey2-5b
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-5a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Well whether or not there's a plan for you is at your discretion. But if you want to remember, it's only a matter of time.",
        faction: '???',
        textLeft: "You act as if I don't want to remember, but I do... it's not just happening yet.", // Survey2-6
        textRight: "If I want to remember?", // Survey2-6
        actionLeft: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-5b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "To rush it would mean to lose it, these things take time. Trust me, trust the process.",
        faction: '???',
        textLeft: "Forgive me if I have a hard time doing that.", // Survey2-6
        textRight: "I can't lose what I've already lost.", // Survey2-6
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-6',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "We should get back to the questions, although all of our interactions help me better understand you. Do me a favor and pick one would you?",
        faction: '???',
        textLeft: "Green", // Survey2-7
        textRight: "Yellow", // Survey2-7
        actionLeft: {
            greenAura: 2,
            yellowAura: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 2
        },
        location: 'survey'
    },
    {
        id: 'survey2-7',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Yes of course, that makes sense. We're almost done here just a few more. Which describes you more?",
        faction: '???',
        textLeft: "I like my quiet time, where I can be alone and pursue my passions and hobbies.", // Survey2-8a
        textRight: "I like to be around others, being the sun that shines on their rainy day.", // Survey2-8b
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-8a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Yes, you strike me as a bit of a recluse. It seems perhaps you do know yourself after all. Next question, pick your favorite of the two.",
        faction: '???',
        textLeft: "Warm tea in a remote winter village.", // Survey2-9
        textRight: "A morning cup of coffee in the backyard.", // Survey2-9
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-8b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Really, the sun? Seems a bit pretentious but no matter. Which of the two appeals more to you?",
        faction: '???',
        textLeft: "A cold drink in the middle of a desert.", // Survey2-9
        textRight: "The calm before the storm.", // Survey2-9
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-9',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "I see... Last question now, and this one's an important one. Do you think you're dead?",
        faction: '???',
        textLeft: "To be honest, yes I do.", // Survey2-10
        textRight: "The thought's crossed my mind, but I don't want to assume the worst.", // Survey2-10
        actionLeft: {
            greenAura: 1,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-10',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "hehe, whether you're dead or alive you won't make any progress until your memories return. I'm going to leave you for now, but I'll be thinking about our conversations. Until next time Jack...",
        faction: '???',
        textLeft: "Wait! I still have questions I want to ask!", // Survey2-11a
        textRight: "Going to abandon me again? Please, just tell me if I'm alive.", // Survey2-11b
        actionLeft: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-11a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "More questions? No matter how many I answer, only you can answer the important ones. You should focus on protecting your mementos for now.",
        faction: '???',
        textLeft: "Fine, but I still don't understand what you mean.", // Survey2-12
        textRight: "Answering some questions is better than none.", // Survey2-12
        actionLeft: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-11b',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Abandon you? What ever gave you the impression I was gone. Don't worry about life and death, just focus on guarding the mementos and you'll be... fine.",
        faction: '???',
        textLeft: "Wait, have you been watching me the entire time?", // Survey2-12
        textRight: "Memento this, memento that. What's so important about them anyways?", // Survey2-12
        actionLeft: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey2-12',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Looks like that's all the time we have for now, see you soon Jack...",
        faction: '???',
        textLeft: "But I-", // Chapter 2
        textRight: "...", // Chapter 2
        actionLeft: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            greenAura: 0,
            yellowAura: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    
]);

export default survey2;