import { writable } from 'svelte/store';

const survey1 = writable([
    {
        id: 'survey1-1',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Fantastic Jack! Yes Jack it is and Jack it must be. Now again, it's just a random survey, just answer honestly. Alright, and away we go!",
        faction: '???',
        textLeft: "Start survey",
        textRight: 'Abandon survey',
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-2a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Thank you for your willing cooperation. Moving on, what's more important to you?",
        faction: '???',
        textLeft: "Comfort",
        textRight: 'Sacrifice',
        actionLeft: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-2b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Hmm... interesting, your decision has been noted. Moving on, what's more important to you?",
        faction: '???',
        textLeft: "Comfort",
        textRight: 'Sacrifice',
        actionLeft: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-3',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Really? I suppose I should've guessed as much. Alright on to the next one; which do you prefer?",
        faction: '???',
        textLeft: "Hearts",
        textRight: 'Diamonds',
        actionLeft: {
            heart: 2,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 2,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-4',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Naturally, what's next now... here we go. You only have time for one, which do you choose?",
        faction: '???',
        textLeft: "Save a stranger from a fire, but he won't show any gratitude.",
        textRight: "Steal a stranger's wallet filled with cash with no chance of being caught. He wouldn't even miss it.",
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-5a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "How selfless of you, what a saint! Truly, you must be a gift from above. Perhaps you should answer the next one honestly though.",
        faction: '???',
        textLeft: "Left",
        textRight: "Right",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-5b',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Hahahaha yes, nicely done. I'm glad you aren't a stranger to yourself. Now for the next one!",
        faction: '???',
        textLeft: "Left",
        textRight: "Right",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-6',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Here's a question, do you think any of your answers have meant anything? Even the last one, did you think that meant something?",
        faction: '???',
        textLeft: "I'd hope so, otherwise this is just one big waste of time.",
        textRight: "I'm not sure, probably not? I just want to get out of here.",
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-7a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Well they are indeed important, except for that left or right one. Honestly I'm not even sure why that one was in there.",
        faction: '???',
        textLeft: "Are we almost done yet?",
        textRight: "Is this all a joke or something?",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-7b',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Bit of a Debbie downer aren't we? Little Sassy Susan wants to go out and play. You won't last very long with an attitude like that you know.",
        faction: '???',
        textLeft: "Whatever, are we done yet?",
        textRight: "Don't lecture me when you won't even tell me what's going on here.",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-8',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "So many questions as always, you'd think I was the one taking the survey. Alright here's the final one, get ready.",
        faction: '???',
        textLeft: "...",
        textRight: "Ready whenever.",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-9',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Who are you?",
        faction: '???',
        textLeft: "I don- I don't remember...",
        textRight: "I am who I am... whoever that is.",
        actionLeft: {
            heart: 1,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 1,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-10',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Fantastic, then it's time. Remember, your decisions have meaning. You aren't alone here, but this is your show... Good luck Jack, hahahaa...",
        faction: '???',
        textLeft: "Wait come back!",
        textRight: "Wait I'm not alone here?",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-11',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "Oh- and by the way, I probably should have mentioned this sooner... But every time we speak, you will gain a memento.",
        faction: '???',
        textLeft: "A memento?",
        textRight: "For what?",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-12',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "The mementos are linked to you, you must protect them. If one of them ever becomes fully damaged... Just remember it's important to keep them intact.",
        faction: '???',
        textLeft: "How would they get damaged?",
        textRight: "Wait, what happens if one breaks?",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-13a',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "It depends on your actions, who you talk to, what you decide to say. Right now you only have one memento to worry about, but soon you will have more... very soon.",
        faction: '???',
        textLeft: "How could me talking to other people damage my mementos?",
        textRight: "What should I avoid saying then?",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-13b',
        imgUrl: '/decks/tutorial/judicator-white-smile.png',
        title:'Jude',
        text: "Now where's the fun in telling you that...",
        faction: '???',
        textLeft: "What about this is fun period?",
        textRight: "Is this a joke to you?",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    },
    {
        id: 'survey1-14',
        imgUrl: '/decks/tutorial/judicator-white.png',
        title:'Jude',
        text: "That's enough questions for now, don't worry you'll be fine. Or maybe you won't, only one way to know for sure. We will speak again soon Jack, very soon...",
        faction: '???',
        textLeft: "I'm not done yet, I still have more questions.",
        textRight: "My questions aren't going anywhere, see you soon \"Jude\".",
        actionLeft: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        actionRight: {
            heart: 0,
            diamond: 0,
            good: 0,
            evil: 0
        },
        location: 'survey'
    }
]);

export default survey1;